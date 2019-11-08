exports.up = function(knex) {
    return knex.raw(`
    CREATE TABLE IF NOT EXISTS profiles_actions_users (
        id_profile_action_user INT UNSIGNED NOT NULL AUTO_INCREMENT,
        id_user_profile INT UNSIGNED NOT NULL,
        id_user_action INT UNSIGNED NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
        deleted_at DATETIME NULL DEFAULT NULL,
        created_by INT UNSIGNED NOT NULL,
        updated_by INT UNSIGNED NOT NULL,
        deleted_by INT UNSIGNED DEFAULT NULL,
        deleted TINYINT(1) NOT NULL DEFAULT 0,
        PRIMARY KEY (id_profile_action_user),
        CONSTRAINT fk_profiles_actions_users_perfis_users1
          FOREIGN KEY (id_user_profile)
          REFERENCES users_profiles (id_user_profile)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION,
        CONSTRAINT fk_profiles_actions_users_actions_users1
          FOREIGN KEY (id_user_action)
          REFERENCES users_actions (id_user_action)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION)
      ENGINE = InnoDB;`).then(() => {
        return knex.raw(`CREATE INDEX deleted ON profiles_actions_users (deleted ASC);`).then(() => {
            return knex.raw(`CREATE INDEX fk_profiles_actions_users_perfis_users1_idx ON profiles_actions_users (id_user_profile ASC);`).then(() => {
                return knex.raw(`CREATE INDEX fk_profiles_actions_users_actions_users1_idx ON profiles_actions_users (id_user_action ASC);`).then(() => {
                    return knex.raw(`CREATE UNIQUE INDEX id_user_profile_UNIQUE ON profiles_actions_users (deleted ASC, id_user_profile ASC, id_user_action ASC);`)
                })          
            })          
        })
      })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('profiles_actions_users')
  }