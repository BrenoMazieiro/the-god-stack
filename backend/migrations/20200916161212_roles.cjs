const { onUpdateTrigger } = require('./triggers')

exports.up = (knex) => knex.schema.createTable('roles', (table) => {
  table.uuid('id').unique().primary().notNullable()
    .defaultTo(knex.raw('gen_random_uuid()'))
  table.string('name').notNullable()
  table.datetime('created_at', { precision: 6 }).notNullable().defaultTo(knex.fn.now(6))
  table.datetime('updated_at', { precision: 6 }).notNullable().defaultTo(knex.fn.now(6))
  table.datetime('deleted_at', { precision: 6 })
  table.uuid('created_by').notNullable()
  table.uuid('updated_by')
  table.uuid('deleted_by')
  table.index(['id'], 'index_role_id')
}).then(() => knex.raw(onUpdateTrigger('roles')))

exports.down = (knex) => knex.schema.dropTable('roles')
