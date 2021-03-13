import crypto from 'crypto'
import UserLogin from './UserLogin.js'
import { shared } from '../../../../../shared/index.js'

describe('User Login', () => {
  it('will login a user', async () => {
    const userId = '0cffbc58-0878-4c37-b643-5bd3f139fdf8'
    const params = {
      username: 'someuser',
      password: 'somepass',
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
    const userLoginMocked = await UserLogin(null, params, ctx)

    expect(userLoginMocked).toMatchObject({ token: 'abc' }) // Success!
  })

  it('will not login a user with invalid credentials', async () => {
    const params = {
      username: 'someuser',
      password: 'somepass',
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
      libs: {
        crypto,
      },
      database: {
        knex: () => ({
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
        knexnest: () => new Promise((resolve) => { resolve({}) }),
      },
    }
    try {
      await UserLogin(null, params, ctx)
      throw new Error()
    } catch (error) {
      expect(error).toHaveProperty('extensions')
      expect(error.extensions.code).toBe('invalid_username_or_password')
    }
  })
})
