/* eslint-disable no-console */
import moment from 'moment'
import crypto from 'crypto'
import { knexnest, knex } from '../../infra/databases/database'
import something from './something'
import otherThing from './otherThing'
import findUserByEmailAndPassword from '../../schemas/GodStackSchemas/Users/Infrastructure/findUserByEmailAndPassword'

// Instantiate the worker module object
const workers = {}

// Do Something
workers.doSomething = (ctx) => {
  something(ctx, 'a wonderfull something')
}

// Do Other Thing
workers.doOtherThing = (ctx) => {
  otherThing(ctx, 'a wonderfull otherThing')
}

workers.whenAgain = (minutes, type) => {
  console.log('\x1b[33m%s\x1b[0m', `[${moment().format("YYYY-MM-DD h:mm:ss")}] INFO: Waiting ${minutes} minute(s) to do ${type} again...`)
}

// Init script
workers.init = async () => {
  let dataConn = { knex, knexnest, moment }
  const [userWorker] = await findUserByEmailAndPassword(
    dataConn,
    process.env.WORKER_EMAIL,
    crypto.createHmac('sha256', process.env.HASH_SECRET).update(process.env.WORKER_PASSWORD).digest('hex'),
  )
  const ctx = Object.assign(dataConn, { user: { idWorker: userWorker.id_user } })

  const confs = Object.assign({SOMETHING_TIME: 0.5, OTHERTHING_TIME: 1})
  console.log('\x1b[35m%s\x1b[0m', `[${moment().format("YYYY-MM-DD h:mm:ss")}] SERVERINIT: 🤖 Background workers are running 🤖`)

  // Do import
  workers.doSomething(ctx)

  // Do export pessoas
  workers.doOtherThing(ctx)
  
  setInterval(function () {
    workers.doSomething(ctx)
    workers.whenAgain(confs.SOMETHING_TIME, "something")
  }, 1000 * 60 * confs.SOMETHING_TIME)

  setInterval(function () {
    workers.doOtherThing(ctx)
    workers.whenAgain(confs.OTHERTHING_TIME, "otherThing")
  }, 1000 * 60 * confs.OTHERTHING_TIME)

}

// Export the module
export default workers
