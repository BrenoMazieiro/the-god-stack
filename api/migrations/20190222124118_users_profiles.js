exports.up = function(knex) {
    return knex.raw(`
    CREATE TABLE IF NOT EXISTS users_profiles (
      id_user_profile INT UNSIGNED NOT NULL AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      slug VARCHAR(100) NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
      deleted_at DATETIME NULL DEFAULT NULL,
      created_by INT UNSIGNED NOT NULL,
      updated_by INT UNSIGNED NOT NULL,
      deleted_by INT UNSIGNED DEFAULT NULL,
      deleted TINYINT(1) NOT NULL DEFAULT 0,
      PRIMARY KEY (id_user_profile))
    ENGINE = InnoDB;`).then(() => {
      return knex.raw(`CREATE INDEX deleted ON users_profiles (deleted ASC);`).then(() => {
        return knex.raw(`CREATE UNIQUE INDEX name_UNIQUE ON users_profiles (deleted ASC, name ASC);`)
      })
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users_profiles')
  }