exports.up = function(knex, Promise) {
    return knex.raw(`
    CREATE TABLE IF NOT EXISTS users_actions (
        id_user_action INT UNSIGNED NOT NULL AUTO_INCREMENT,
        name VARCHAR(64) NOT NULL,
        description VARCHAR(256) NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
        deleted_at DATETIME NULL DEFAULT NULL,
        created_by INT UNSIGNED NOT NULL,
        updated_by INT UNSIGNED NOT NULL,
        deleted_by INT UNSIGNED DEFAULT NULL,
        deleted TINYINT(1) NOT NULL DEFAULT 0,
        PRIMARY KEY (id_user_action),
        INDEX deleted (deleted ASC) ,
        UNIQUE INDEX name_UNIQUE (deleted ASC, name ASC) )
      ENGINE = InnoDB;
    `)
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_actions');
  }