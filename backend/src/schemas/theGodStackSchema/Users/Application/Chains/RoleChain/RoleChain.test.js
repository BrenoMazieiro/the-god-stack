import { RoleChain } from './RoleChain.js'

describe('User Chain roles resolver', () => {
  it('will fetch for permissions on roles', async () => {
    const ctx = {
      database: {
        knex: () => ({
          select: () => ({
            whereNull: () => {},
            join: () => ({
              where: () => {},
            }),
          }),
        }),
        knexnest: () => new Promise((resolve) => { resolve({ id: '15c18aa9-199c-4d45-b35a-fbfa2e65f211' }) }),
      },
    }
    const rolesMocked = await RoleChain.permissions({ roleId: '15c18aa9-199c-4d45-b35a-fbfa2e65f211' }, null, ctx)
    expect(rolesMocked).toStrictEqual({ id: '15c18aa9-199c-4d45-b35a-fbfa2e65f211' })
  })
})
