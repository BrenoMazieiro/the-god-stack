import knexLib from 'knex'
import knexNest from 'knexnest'

const knex = knexLib({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
  // useNullAsDefault: true
})

const knexnest = knexNest

export { knex, knexnest }
