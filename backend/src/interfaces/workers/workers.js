/* eslint-disable no-console */
import { shared } from '../../shared/index.js'
import { sendEmailtoNewUser } from './executors/sendEmailtoNewUser.js'
import { getSystemUserId } from './infrastructure/getSystemUserId.js'

let interval = null
// Instantiate the worker module object
export const workers = {}

// Do Something
workers.sendEmailtoNewUser = (ctx) => {
  sendEmailtoNewUser(ctx).then(() => null).catch(() => null)
}

workers.whenAgain = (minutes, type) => {
  console.log('\x1b[33m%s\x1b[0m', `[${new Date()}] INFO: Waiting ${minutes} minute(s) to do ${type} again...`)
}

// Init script
workers.init = async () => {
  const user = await getSystemUserId(shared) // getUser system
  const ctx = { ...shared, user }

  const confs = { SEND_EMAIL_TO_NEW_USER_TIME: 0.16, OTHERTHING_TIME: 1 }
  console.log('\x1b[35m%s\x1b[0m', `[${new Date()}] SERVERINIT: 🤖 Background workers are running 🤖`)

  // Will sendEmailtoNewUser on start
  workers.sendEmailtoNewUser(ctx)

  interval = setInterval(() => {
    workers.sendEmailtoNewUser(ctx)
    workers.whenAgain(confs.SEND_EMAIL_TO_NEW_USER_TIME, 'something')
  }, 1000 * 60 * confs.SEND_EMAIL_TO_NEW_USER_TIME)
}

workers.stop = () => {
  clearInterval(interval)
}
