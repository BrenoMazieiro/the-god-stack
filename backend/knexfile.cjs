module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      ssl: true,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}
