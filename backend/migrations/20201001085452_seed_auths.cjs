exports.up = (knex) => Promise.all([
  knex.raw(`
    INSERT INTO roles(id, name, created_at, updated_at, created_by, updated_by)
    VALUES('15c18aa9-199c-4d45-b35a-fbfa2e65f242', 'System Administrator', CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),
  knex.raw(`
    INSERT INTO roles(id, name, created_at, updated_at, created_by, updated_by)
    VALUES('15c18aa9-199c-4d45-b35a-fbfa2e65f243', 'backoffice admin', CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),
  knex.raw(`
    INSERT INTO roles(id, name, created_at, updated_at, created_by, updated_by)
    VALUES('15c18aa9-199c-4d45-b35a-fbfa2e65f244', 'regular user', CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),
  knex.raw(`INSERT INTO public.users
    (id, role_id, name, picture, email, username, "password", approval_token, created_at, updated_at, created_by, updated_by)
    VALUES('15c18aa9-199c-4d45-b35a-fbfa2e65f000', '15c18aa9-199c-4d45-b35a-fbfa2e65f242', 'system', '', 'admin@thegodstack.com', 'system', 'Xx()*6%.js@#45654AAdd', null, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f000', '15c18aa9-199c-4d45-b35a-fbfa2e65f000')`),
  knex.raw(`INSERT INTO public.users
    (id, role_id, name, picture, email, username, "password", approval_token, created_at, updated_at, created_by, updated_by)
    VALUES('15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f242', 'migration', '', 'migration@thegodstack.com', 'migration', 'Xx()*6%.js@#45654AAdd', null, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f000', '15c18aa9-199c-4d45-b35a-fbfa2e65f000')`),
  knex.raw(`
      INSERT INTO permissions(id, code, description, created_at, updated_at, created_by, updated_by) VALUES('15c18aa9-199c-4d45-b35a-fbfa2e65f250', 'usr_c', 'User managment create',CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),
  knex.raw(`
      INSERT INTO permissions(id, code, description, created_at, updated_at, created_by, updated_by) VALUES('15c18aa9-199c-4d45-b35a-fbfa2e65f251', 'usr_r', 'User managment read',CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),
  knex.raw(`
      INSERT INTO permissions(id, code, description, created_at, updated_at, created_by, updated_by) VALUES('15c18aa9-199c-4d45-b35a-fbfa2e65f252', 'usr_u', 'User managment update',CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),
  knex.raw(`
      INSERT INTO permissions(id, code, description, created_at, updated_at, created_by, updated_by) VALUES('15c18aa9-199c-4d45-b35a-fbfa2e65f253', 'usr_d', 'User managment delete',CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),

  knex.raw(`
      INSERT INTO role_permissions(role_id, permission_id, created_at, updated_at, created_by, updated_by) VALUES ('15c18aa9-199c-4d45-b35a-fbfa2e65f242', '15c18aa9-199c-4d45-b35a-fbfa2e65f250', CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),
  knex.raw(`
      INSERT INTO role_permissions(role_id, permission_id, created_at, updated_at, created_by, updated_by) VALUES ('15c18aa9-199c-4d45-b35a-fbfa2e65f242', '15c18aa9-199c-4d45-b35a-fbfa2e65f251', CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),
  knex.raw(`
      INSERT INTO role_permissions(role_id, permission_id, created_at, updated_at, created_by, updated_by) VALUES ('15c18aa9-199c-4d45-b35a-fbfa2e65f242', '15c18aa9-199c-4d45-b35a-fbfa2e65f252', CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),
  knex.raw(`
      INSERT INTO role_permissions(role_id, permission_id, created_at, updated_at, created_by, updated_by) VALUES ('15c18aa9-199c-4d45-b35a-fbfa2e65f242', '15c18aa9-199c-4d45-b35a-fbfa2e65f253', CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),

  knex.raw(`
      INSERT INTO role_permissions(role_id, permission_id, created_at, updated_at, created_by, updated_by) VALUES ('15c18aa9-199c-4d45-b35a-fbfa2e65f243', '15c18aa9-199c-4d45-b35a-fbfa2e65f250', CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),
  knex.raw(`
      INSERT INTO role_permissions(role_id, permission_id, created_at, updated_at, created_by, updated_by) VALUES ('15c18aa9-199c-4d45-b35a-fbfa2e65f243', '15c18aa9-199c-4d45-b35a-fbfa2e65f251', CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),
  knex.raw(`
      INSERT INTO role_permissions(role_id, permission_id, created_at, updated_at, created_by, updated_by) VALUES ('15c18aa9-199c-4d45-b35a-fbfa2e65f243', '15c18aa9-199c-4d45-b35a-fbfa2e65f252', CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),
  knex.raw(`
      INSERT INTO role_permissions(role_id, permission_id, created_at, updated_at, created_by, updated_by) VALUES ('15c18aa9-199c-4d45-b35a-fbfa2e65f243', '15c18aa9-199c-4d45-b35a-fbfa2e65f253', CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), '15c18aa9-199c-4d45-b35a-fbfa2e65f001', '15c18aa9-199c-4d45-b35a-fbfa2e65f001');
    `),

])

exports.down = (knex) => Promise.all([
  knex.raw(`
      TRUNCATE TABLE role_permissions;
    `),
  knex.raw(`
      TRUNCATE TABLE permissions;
    `),
  knex.raw(`
      TRUNCATE TABLE roles;
    `),
])
