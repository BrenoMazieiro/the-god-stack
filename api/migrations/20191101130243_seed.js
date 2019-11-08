exports.up = function(knex) {
  return Promise.all([
    knex.raw(`
      INSERT INTO users_profiles(id_user_profile, name, slug, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(1, 'Administrators', 'admin', '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_profiles(id_user_profile, name, slug, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(2, 'Subscribers', 'subscriber', '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(1, 'UserLogin', 'user login', '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(2, 'Users', 'user managment', '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(3, 'Profiles', 'profile management', '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO users_actions(id_user_action, name, description, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES(4, 'Actions', 'action management', '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_profile_action_user, id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (1, 1, 1, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_profile_action_user, id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (2, 1, 2, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_profile_action_user, id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (3, 1, 3, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_profile_action_user, id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (4, 1, 4, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profiles_actions_users(id_profile_action_user, id_user_profile, id_user_action, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, deleted) VALUES (5, 2, 1, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
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