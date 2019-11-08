module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.MARIAHOSTMIGRATIONS,
      database: process.env.MARIADATABASEMIGRATIONS,
      user: process.env.MARIAUSERMIGRATIONS,
      password: process.env.MARIAPASSWORDMIGRATIONS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "mysql",
    connection: {
      host: process.env.MARIAHOSTMIGRATIONS,
      database: process.env.MARIADATABASEMIGRATIONS,
      user: process.env.MARIAUSERMIGRATIONS,
      password: process.env.MARIAPASSWORDMIGRATIONS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql",
    connection: {
      host: process.env.MARIAHOSTMIGRATIONS,
      database: process.env.MARIADATABASEMIGRATIONS,
      user: process.env.MARIAUSERMIGRATIONS,
      password: process.env.MARIAPASSWORDMIGRATIONS,
      ssl: true,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
}
