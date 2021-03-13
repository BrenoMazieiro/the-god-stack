const { onUpdateTrigger } = require('./triggers')

exports.up = (knex) => knex.schema.createTable('role_permissions', (table) => {
  table.uuid('role_id').notNullable().references('roles.id')
  table.uuid('permission_id').notNullable().references('permissions.id')
  table.datetime('created_at', { precision: 6 }).notNullable().defaultTo(knex.fn.now(6))
  table.datetime('updated_at', { precision: 6 }).notNullable().defaultTo(knex.fn.now(6))
  table.datetime('deleted_at', { precision: 6 })
  table.uuid('created_by').notNullable()
  table.uuid('updated_by')
  table.uuid('deleted_by')
  table.primary(['role_id', 'permission_id'])
}).then(() => knex.raw(onUpdateTrigger('role_permissions')))

exports.down = (knex) => knex.schema.dropTable('role_permissions')
