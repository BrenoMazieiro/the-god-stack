export const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.MARIAHOST,
    database: process.env.MARIADATABASE,
    user: process.env.MARIAUSER,
    password: process.env.MARIAPASSWORD,
  },
  // useNullAsDefault: true
})

export const knexmigrations = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.MARIAHOSTMIGRATIONS,
    database: process.env.MARIADATABASEMIGRATIONS,
    user: process.env.MARIAUSERMIGRATIONS,
    password: process.env.MARIAPASSWORDMIGRATIONS,
  },
  // useNullAsDefault: true
})

export const knexnest = require('knexnest')
