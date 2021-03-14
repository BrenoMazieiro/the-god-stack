const { onUpdateTrigger } = require('./triggers')

exports.up = (knex) => knex.schema.createTable('queueemails', (table) => {
  table.uuid('id').unique().primary().notNullable()
    .defaultTo(knex.raw('gen_random_uuid()'))
  table.uuid('user_id').notNullable().references('users.id')
  table.enu('type', ['approval_token'], { useNative: true, enumName: 'queue_email_type' })
  table.datetime('created_at', { precision: 6 }).notNullable().defaultTo(knex.fn.now(6))
  table.datetime('updated_at', { precision: 6 }).notNullable().defaultTo(knex.fn.now(6))
  table.datetime('deleted_at', { precision: 6 })
  table.uuid('created_by').notNullable()
  table.uuid('updated_by')
  table.uuid('deleted_by')
  table.index(['id'], 'index_queueemails_id')
}).then(() => knex.raw(onUpdateTrigger('queueemails')))

exports.down = (knex) => knex.schema.dropTable('queueemails')
