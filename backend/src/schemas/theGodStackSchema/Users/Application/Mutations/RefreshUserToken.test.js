import RefreshUserToken from './RefreshUserToken.js'
import { shared } from '../../../../../shared/index.js'

describe('User Login', () => {
  it('will refresh the user token with a valid refreshToken', async () => {
    const userId = '0cffbc58-0878-4c37-b643-5bd3f139fdf8'
    const params = {
      refreshToken: '99eb3a354b8d8f31e58c622fca1e4e046a2dfa9e32940494e7625ef7afef8554',
    }
    const ctx = {
      core: {
        createToken: () => 'abc',
        encrypt: {
          strong: {
            encrypt: () => 'encrypted',
            compare: () => true,
          },
          weak: {
            encrypt: () => 'encrypted',
          },
          random: () => 'abc',
          randomDataForRefreshToken: () => 'randonString',
        },
      },
      database: {
        knex: () => ({
          where: () => ({
            del: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
          }),
          insert: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
          select: () => ({
            leftJoin: () => ({
              leftJoin: () => ({
                leftJoin: () => ({
                  leftJoin: () => ({
                    whereNull: () => ({
                      andWhere: () => ({
                        andWhere: () => null,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        }),
        knexnest: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
      },
    }
    const userLoginMocked = await RefreshUserToken(null, params, ctx)

    expect(userLoginMocked).toMatchObject({ token: 'abc' }) // Success!
  })

  it('will not refresh the user token with a invalid refreshToken', async () => {
    const userId = '0cffbc58-0878-4c37-b643-5bd3f139fdf8'
    const params = {
      refreshToken: '99eb3a354b8d8f31e58c622fca1e4e046a2dfa9e32940494e7625ef7afef8554',
    }
    const ctx = {
      id: null,
      core: {
        ...shared.core,
        createToken: () => 'abc',
        encrypt: {
          strong: {
            encrypt: () => 'encrypted',
            compare: () => true,
          },
          weak: {
            encrypt: () => 'encrypted',
          },
          random: () => 'abc',
          randomDataForRefreshToken: () => 'randonString',
        },
      },
      database: {
        knex: () => ({
          select: () => ({
            leftJoin: () => ({
              leftJoin: () => ({
                leftJoin: () => ({
                  leftJoin: () => ({
                    whereNull: () => ({
                      andWhere: () => ({
                        andWhere: () => null,
                      }),
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
        knexnest: () => new Promise((resolve) => { resolve(null) }),
      },
    }
    try {
      await RefreshUserToken(null, params, ctx)
      throw new Error()
    } catch (error) {
      expect(error).toHaveProperty('extensions')
      expect(error.extensions.code).toBe('invalid_refresh_token')
    }
  })
})
