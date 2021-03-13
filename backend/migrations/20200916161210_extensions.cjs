exports.up = (knex) => (
  knex.raw('create extension if not exists "pgcrypto"')
)
exports.down = (knex) => knex.raw('drop extension if exists "pgcrypto"')
