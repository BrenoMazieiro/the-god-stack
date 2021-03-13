const ON_UPDATE_TIMESTAMP_FUNCTION = `
  CREATE OR REPLACE FUNCTION on_update_timestamp()
  RETURNS trigger AS $$
  BEGIN
    NEW.updated_at = now();
    RETURN NEW;
  END;
$$ language 'plpgsql';
`

const DROP_ON_UPDATE_TIMESTAMP_FUNCTION = 'DROP FUNCTION on_update_timestamp'

exports.up = (knex) => knex.raw(ON_UPDATE_TIMESTAMP_FUNCTION)
exports.down = (knex) => knex.raw(DROP_ON_UPDATE_TIMESTAMP_FUNCTION)
