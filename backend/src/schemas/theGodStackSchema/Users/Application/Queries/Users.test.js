import Users from './Users.js'
import { shared } from '../../../../../shared/index.js'

describe('Users Queries', () => {
  it('will fetch for users', async () => {
    const userId = '0cffbc58-0878-4c37-b643-5bd3f139fdf8'
    const params = {
      id: null,
      deleted: false,
    }
    const ctx = {
      core: shared.core,
      user: {
        id: userId,
        isValid: true,
        permissions: ['usr_r'],
      },
      database: {
        knex: () => ({
          select: () => ({
            whereNotIn: () => ({
              whereNull: () => {},
              limit: () => ({}),
              offset: () => true,
            }),
          }),
        }),
        knexnest: () => new Promise((resolve) => { resolve({ id: userId }) }),
      },
    }
    const usersMocked = await Users(null, params, ctx)
    expect(usersMocked).toStrictEqual({ id: userId })
  })

  it('will not fetch for users with invalid user', async () => {
    const params = {
      id: null,
      deleted: false,
    }
    const ctx = {
      user: {
        id: '0cffbc58-0878-4c37-b643-5bd3f139fdf8',
        permissions: ['usr_r'],
      },
      core: shared.core,
      database: {
        knex: () => ({
          select: () => ({
            whereNull: () => {},
            limit: () => ({}),
            offset: () => true,
          }),
        }),
        knexnest: () => new Promise((resolve) => { resolve({ id: '0cffbc58-0878-4c37-b643-5bd3f139fdf8' }) }),
      },
    }
    try {
      await Users(null, params, ctx)
      throw new Error()
    } catch (error) {
      expect(error).toHaveProperty('extensions')
      expect(error.extensions.code).toBe('user_should_validate')
    }
  })
})
