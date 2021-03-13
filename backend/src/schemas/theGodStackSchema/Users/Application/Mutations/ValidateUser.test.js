import ValidateUser from './ValidateUser.js'
import { shared } from '../../../../../shared/index.js'

describe('ValidateUser Mutation', () => {
  it('will validate a user', async () => {
    const userId = '0cffbc58-0878-4c37-b643-5bd3f139fdf8'
    const params = {
      token: 'abc',
    }
    const ctx = {
      user: {
        id: userId,
      },
      core: {
        ...shared.core,
        email: {
          emailSender: () => true,
          templates: shared.core.emailTemplates,
        },
        encrypt: {
          strong: {
            encrypt: () => 'encrypted',
            compare: () => true,
          },
          weak: {
            encrypt: () => 'encrypted',
          },
          randomDataForRefreshToken: () => 'randonString',
        },
      },
      database: {
        knex: () => ({
          update: () => ({
            where: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
          }),
          select: () => ({
            leftJoin: () => ({
              leftJoin: () => ({
                leftJoin: () => ({
                  whereNull: () => ({
                    andWhere: () => ({
                      andWhere: () => true,
                    }),
                  }),
                }),
              }),
            }),
          }),
          where: () => ({
            del: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
          }),
          insert: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
        }),
        knexnest: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
      },
    }
    const usersMocked = await ValidateUser(null, params, ctx)
    const token = {
      refreshToken: 'encrypted',
      token: (
        ctx.core.createToken(
          {
            userData: {
              id: userId,
              isValid: true,
              permissions: [null],
            },
            sub: userId,
            iss: process.env.JWT_ISS || 'thegodstackapi',
            aud: process.env.JWT_AUD || 'thegodstack',
          },
        )
      ),
    }
    expect(usersMocked).toStrictEqual(token)
  })

  it('will not validate a user with invalid token', async () => {
    const userId = '0cffbc58-0878-4c37-b643-5bd3f139fdf8'
    const params = {
      token: 'abc',
    }
    const ctx = {
      user: {
        id: userId,
      },
      core: {
        ...shared.core,
        email: {
          emailSender: () => true,
          templates: shared.core.emailTemplates,
        },
      },
      database: {
        knex: () => ({
          update: () => ({
            where: () => new Promise((resolve) => { resolve(false) }),
          }),
          select: () => ({
            leftJoin: () => ({
              leftJoin: () => ({
                leftJoin: () => ({
                  whereNull: () => ({
                    andWhere: () => ({
                      andWhere: () => true,
                    }),
                  }),
                }),
              }),
            }),
          }),
        }),
        knexnest: () => new Promise((resolve) => { resolve(false) }),
      },
    }
    try {
      await ValidateUser(null, params, ctx)
      throw new Error()
    } catch (error) {
      expect(error).toHaveProperty('extensions')
      expect(error.extensions.code).toBe('invalid_user')
    }
  })
})
