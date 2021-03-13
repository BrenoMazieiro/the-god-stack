import { knex, knexnest } from './database/postgres.js'
import * as core from './core/index.js'

export const shared = {
  core,
  database: {
    knex,
    knexnest,
  },
}
