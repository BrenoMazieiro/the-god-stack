/* eslint-disable no-console */
// import {knex} from '../infra/databases/database'
import crypto from 'crypto'
import { knexmigrations as knex } from '../infra/databases/database'

const adminEmail = process.env.ADMIN_EMAIL
const adminPassw = crypto.createHmac('sha256', process.env.HASH_SECRET).update(process.env.ADMIN_PASSWORD).digest('hex')
const workerEmail = process.env.WORKER_EMAIL
const workerPassw = crypto.createHmac('sha256', process.env.HASH_SECRET).update(process.env.WORKER_PASSWORD).digest('hex')
const normalUserPass = crypto.createHmac('sha256', process.env.HASH_SECRET).update(process.env.ADMIN_PASSWORD).digest('hex')

console.log('\n\n\ud83d\udd0c   Begining Database seeding...  \ud83d\udd0c\n\n')

// add test user on profile 1 (super)
const users = [
  {
    givenName: 'Super',
    familyName: 'User',
    email: adminEmail,
    password: adminPassw,
    id_user_profile: 1,
    language: 'enUS',
    created_at: knex.fn.now(),
    updated_at: knex.fn.now(),
    created_by: 1,
    updated_by: 1,
  },
  {
    givenName: 'Worker',
    familyName: 'User',
    email: workerEmail,
    password: workerPassw,
    id_user_profile: 1,
    language: 'ptBR',
    created_at: knex.fn.now(),
    updated_at: knex.fn.now(),
    created_by: 1,
    updated_by: 1,
  },
  {
    givenName: 'Normal',
    familyName: 'User',
    email: 'normaluser@mailinator.com',
    password: normalUserPass,
    id_user_profile: 2,
    language: 'ptBR',
    created_at: knex.fn.now(),
    updated_at: knex.fn.now(),
    created_by: 1,
    updated_by: 1,
  },
]

let usersPromise = () => {
  return new Promise((resolve) => {
    knex('users')
      .insert(users)
      .then(() => {
        resolve(' => Super User Seeded')
      })
      .catch(err => {
        console.log(err); throw err
      })
  })
}

function serie (promises) {
  return new Promise((resolve) => {
    if (Array.isArray(promises) && promises.length > 0) {
      if (promises.length > 0) {
        promises[0]()
          .then(result => {
            console.log(result)
            promises.splice(0, 1)
            resolve(serie(promises))
          })
          .catch(error => {
            console.log('Error in: ' + promises[0].name, 'with error: ', error.message)
          })
      }
    } else {
      resolve('\n\n\ud83c\udf31  Seed successfully done! \ud83c\udf31\n\n')
    }
  })
}

let promises = [
  usersPromise,
]

serie(promises).then(result => {
  console.log(result)
  knex.destroy()
})
