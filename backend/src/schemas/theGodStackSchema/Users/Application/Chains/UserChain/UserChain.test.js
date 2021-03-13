import { UserChain } from './UserChain.js'

describe('User Chain roles resolver', () => {
  it('will fetch for roles on user', async () => {
    const ctx = {
      database: {
        knex: () => ({
          select: () => ({
            whereNull: () => {},
            where: () => {},
          }),
        }),
        knexnest: () => new Promise((resolve) => { resolve([{ id: '15c18aa9-199c-4d45-b35a-fbfa2e65f221' }]) }),
      },
    }
    const rolesMocked = await UserChain.role({ roleId: '15c18aa9-199c-4d45-b35a-fbfa2e65f221' }, null, ctx)
    expect(rolesMocked).toStrictEqual({ id: '15c18aa9-199c-4d45-b35a-fbfa2e65f221' })
  })
})
