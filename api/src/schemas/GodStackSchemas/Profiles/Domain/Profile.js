/* Definition */
export const ProfileDomain = `
type Profile {
  id: Int
  name: String!
  slug: String!
  actions: [Action]
}
`

/* QUERIES */
export const ProfileQueries = `
  Profiles: [Profile]
`

/* MUTATIONS */

/* INPUTS */
