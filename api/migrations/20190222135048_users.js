exports.up = function(knex) {
    return knex.raw(`
    CREATE TABLE IF NOT EXISTS users (
        id_user INT UNSIGNED NOT NULL AUTO_INCREMENT,
        id_user_profile INT UNSIGNED NOT NULL,
        givenName VARCHAR(50) NOT NULL,
        familyName VARCHAR(50) NOT NULL,
        language ENUM('ptBR', 'enUS', 'esES'),
        email VARCHAR(100) NOT NULL,
        password VARCHAR(64) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
        deleted_at DATETIME NULL DEFAULT NULL,
        created_by INT UNSIGNED NOT NULL,
        updated_by INT UNSIGNED NOT NULL,
        deleted_by INT UNSIGNED DEFAULT NULL,
        deleted TINYINT(1) NOT NULL DEFAULT 0,
        active TINYINT(1) NOT NULL DEFAULT 1,
        PRIMARY KEY (id_user),
        CONSTRAINT fk_users_profile_user
          FOREIGN KEY (id_user_profile)
          REFERENCES users_profiles (id_user_profile)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION)
      ENGINE = InnoDB;`).then(()=>{
        return knex.raw(`CREATE UNIQUE INDEX email_UNIQUE ON users (email ASC, deleted ASC);`).then(()=>{
            return knex.raw(`CREATE INDEX login ON users (deleted ASC, email ASC, password ASC);`).then(()=>{
                return knex.raw(`CREATE INDEX deleted ON users (deleted ASC);`).then(()=>{
                    return knex.raw(`CREATE INDEX fk_users_profile_user_idx ON users (id_user_profile ASC);`)
                })
            })
          })
      })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users')
  }