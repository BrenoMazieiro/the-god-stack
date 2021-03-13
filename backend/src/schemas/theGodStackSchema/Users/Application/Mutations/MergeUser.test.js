import MergeUser from './MergeUser.js'
import { shared } from '../../../../../shared/index.js'

describe('MergeUser Mutation', () => {
  it('will create a user', async () => {
    const userId = '0cffbc58-0878-4c37-b643-5bd3f139fdf8'
    const params = {
      id: null,
      deleteIt: false,
      userData: {
        name: 'My user',
        picture: 'https://picsum.photos/200/300',
        email: 'breno.mazieiro@plathanus.com.br',
        username: 'breno.mazieiro',
        password: '12345678',
      },
    }
    const ctx = {
      core: {
        ...shared.core,
        encrypt: {
          strong: {
            encrypt: () => 'encrypted',
            compare: () => true,
          },
          weak: {
            encrypt: () => 'encrypted',
          },
        },
        email: {
          emailSender: () => null,
          templates: shared.core.emailTemplates,
        },

      },
      database: {
        knex: () => (
          {
            where: () => ({
              del: () => new Promise((resolve) => { resolve(null) }),
            }),
            insert: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
            select: () => ({
              whereNotIn: () => ({
                where: () => {},
                whereNull: () => {},
                limit: () => ({}),
                offset: () => true,
              }),
              where: () => {},
            }
            ),
          }),
        knexnest: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
      },
    }
    const usersMocked = await MergeUser(null, params, ctx)
    expect(usersMocked).toStrictEqual([{ id: userId }])
  })

  it('will update a user as admin', async () => {
    const userId = '0cffbc58-0878-4c37-b643-5bd3f139fdf8'
    const params = {
      id: userId,
      deleteIt: false,
      userData: {
        name: 'My user edited',
        picture: 'https://picsum.photos/200/400',
        email: 'breno.mazieiro.edited@plathanus.com.br',
        username: 'breno.mazieiro',
        password: '12345678',
      },
    }
    const ctx = {
      user: {
        id: '10cffbc58-0878-4c37-b643-5bd3f139fdf0',
        isValid: true,
        permissions: ['usr_u'],
      },
      core: {
        ...shared.core,
        encrypt: {
          strong: {
            encrypt: () => 'encrypted',
            compare: () => true,
          },
          weak: {
            encrypt: () => 'encrypted',
          },
        },
      },
      database: {
        knex: () => (
          {
            insert: () => new Promise((resolve) => { resolve([{ id: '1' }]) }),
            select: () => ({
              whereNotIn: () => ({
                where: () => {},
                whereNull: () => {},
                limit: () => ({}),
                offset: () => true,
              }),
              where: () => {},
            }
            ),
            update: () => ({
              where: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
            }),
          }),
        knexnest: () => new Promise((resolve) => { resolve({ id: userId }) }),
      },
    }
    const usersMocked = await MergeUser(null, params, ctx)
    expect(usersMocked).toStrictEqual({ id: userId })
  })

  it('will not update a user if not logged in', async () => {
    const userId = '0cffbc58-0878-4c37-b643-5bd3f139fdf8'
    const params = {
      id: userId,
      deleteIt: false,
      userData: {
        name: 'My user edited',
        picture: 'https://picsum.photos/200/400',
        email: 'breno.mazieiro.edited@plathanus.com.br',
        username: 'breno.mazieiro',
        password: '12345678',
      },
    }
    const ctx = {
      user: {
        id: null,
      },
      core: shared.core,
      database: {
        knex: () => (
          {
            insert: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
            select: () => ({
              whereNull: () => {},
              where: () => {},
              limit: () => ({}),
              offset: () => true,
            }),
            update: () => ({
              where: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
            }),
          }),
        knexnest: () => new Promise((resolve) => { resolve({ id: userId }) }),
      },
    }
    try {
      await MergeUser(null, params, ctx)
      throw new Error()
    } catch (error) {
      expect(error).toHaveProperty('extensions')
      expect(error.extensions.code).toBe('not_authorized')
    }
  })

  it('will not update a user with invalid data', async () => {
    const userId = '0cffbc58-0878-4c37-b643-5bd3f139fdf8'
    const params = {
      id: userId,
      deleteIt: false,
      userData: {
        name: 'M',
        picture: 'h',
        email: 'breno.mazieiro.edited@',
        username: 'bre',
        password: '123',
      },
    }
    const ctx = {
      core: shared.core,
      user: {
        id: '10cffbc58-0878-4c37-b643-5bd3f139fdf0',
        isValid: true,
        permissions: ['usr_u'],
      },
      database: {
        knex: () => (
          {
            insert: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
            select: () => ({
              whereNull: () => {},
              where: () => {},
              limit: () => ({}),
              offset: () => true,
            }),
            update: () => ({
              where: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
            }),
          }),
        knexnest: () => new Promise((resolve) => { resolve({ id: userId }) }),
      },
    }
    try {
      await MergeUser(null, params, ctx)
      throw new Error()
    } catch (error) {
      expect(error).toHaveProperty('extensions')
      expect(error.extensions.code).toBe('params_arguments_invalid')
    }
  })

  it('will not create a user with invalid data', async () => {
    const userId = '0cffbc58-0878-4c37-b643-5bd3f139fdf8'
    const params = {
      id: null,
      deleteIt: false,
      userData: {
        name: 'M',
        picture: 'h',
        email: 'breno.mazieiro.edited@',
        username: 'bro',
        password: '123',
      },
    }
    const ctx = {
      user: {
        id: null,
      },
      core: shared.core,
      database: {
        knex: () => (
          {
            insert: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
            select: () => ({
              whereNull: () => {},
              where: () => {},
              limit: () => ({}),
              offset: () => true,
            }),
            update: () => ({
              where: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
            }),
          }),
        knexnest: () => new Promise((resolve) => { resolve({ id: userId }) }),
      },
    }
    try {
      await MergeUser(null, params, ctx)
      throw new Error()
    } catch (error) {
      expect(error).toHaveProperty('extensions')
      expect(error.extensions.code).toBe('params_arguments_invalid')
    }
  })

  it('will delete a user', async () => {
    const userId = '0cffbc58-0878-4c37-b643-5bd3f139fdf8'
    const params = {
      id: userId,
      deleteIt: true,
    }
    const ctx = {
      user: {
        id: '0cffbc58-0878-4c37-b643-5bd3f139fdf0',
        isValid: true,
        permissions: ['usr_d'],
      },
      core: shared.core,
      database: {
        knex: () => (
          {
            insert: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
            select: () => ({
              whereNotIn: () => ({
                where: () => {},
                whereNull: () => {},
                limit: () => ({}),
                offset: () => true,
              }),
              where: () => {},
            }
            ),
            update: () => ({
              where: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
            }),
          }),
        knexnest: () => new Promise((resolve) => { resolve(null) }),
      },
    }
    ctx.database.knex.fn = {
      now: () => {},
    }
    const usersMocked = await MergeUser(null, params, ctx)
    expect(usersMocked).toStrictEqual(null)
  })

  it('will not delete a user if not logged in', async () => {
    const userId = '0cffbc58-0878-4c37-b643-5bd3f139fdf8'
    const params = {
      id: userId,
      deleteIt: true,
    }
    const ctx = {
      user: {
        id: null,
      },
      core: shared.core,
      database: {
        knex: () => (
          {
            insert: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
            select: () => ({
              whereNull: () => {},
              where: () => {},
              limit: () => ({}),
              offset: () => true,
            }),
            update: () => ({
              where: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
            }),
          }),
        knexnest: () => new Promise((resolve) => { resolve({ id: userId }) }),
      },
    }
    try {
      await MergeUser(null, params, ctx)
      throw new Error()
    } catch (error) {
      expect(error).toHaveProperty('extensions')
      expect(error.extensions.code).toBe('not_authorized')
    }
  })

  it('will not handle a user if not valid user', async () => {
    const userId = '0cffbc58-0878-4c37-b643-5bd3f139fdf8'
    const params = {
      id: userId,
      deleteIt: true,
    }
    const ctx = {
      user: {
        id: '0cffbc58-0878-4c37-b643-5bd3f139fdf0',
        permissions: ['usr_d'],
      },
      core: shared.core,
      database: {
        knex: () => (
          {
            insert: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
            select: () => ({
              whereNull: () => {},
              where: () => {},
              limit: () => ({}),
              offset: () => true,
            }),
            update: () => ({
              where: () => new Promise((resolve) => { resolve([{ id: userId }]) }),
            }),
          }),
        knexnest: () => new Promise((resolve) => { resolve({ id: userId }) }),
      },
    }
    try {
      await MergeUser(null, params, ctx)
      throw new Error()
    } catch (error) {
      expect(error).toHaveProperty('extensions')
      expect(error.extensions.code).toBe('user_should_validate')
    }
  })
})
