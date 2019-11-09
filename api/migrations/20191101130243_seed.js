exports.up = function(knex) {
  return Promise.all([
    knex.raw(`
      INSERT INTO users_profiles(id_user_profile, name, slug, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(1, 'Administrators', 'admin', '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_profiles(id_user_profile, name, slug, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(2, 'Subscribers', 'subscriber', '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `), 

    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(1, 'Users', 'user managment', 'b','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(2, 'Users', 'user managment', 'r','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(3, 'Users', 'user managment', 'e','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(4, 'Users', 'user managment', 'a','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(5, 'Users', 'user managment', 'd','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),


    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(6, 'Profiles', 'profile management', 'b','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(7, 'Profiles', 'profile management', 'r','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(8, 'Profiles', 'profile management', 'e','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(9, 'Profiles', 'profile management', 'a','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(10, 'Profiles', 'profile management', 'd','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),

    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(11, 'Actions', 'action management', 'b','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(12, 'Actions', 'action management', 'r','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(13, 'Actions', 'action management', 'e','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(14, 'Actions', 'action management', 'a','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, type, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(15, 'Actions', 'action management', 'd','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),

    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 1, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 2, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 3, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 4, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 5, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 6, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 7, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 8, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 9, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 10, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 11, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 12, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 13, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 14, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 15, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    
    knex.raw(`
      INSERT INTO profiles_actions_users(id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (2, 1, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
  ])
}

exports.down = function(knex) {
  return Promise.all([
    knex.raw(`
      set foreign_key_checks = 0;
    `),
    knex.raw(`
      TRUNCATE TABLE profiles_actions_users;
    `),
    knex.raw(`
      TRUNCATE TABLE users_actions;
    `),
    knex.raw(`
      TRUNCATE TABLE users_profiles;
    `),
    knex.raw(`
      set foreign_key_checks = 1;
    `),
  ])
}