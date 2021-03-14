import { getFromQueueSendEmailNewUsers } from '../infrastructure/getFromQueueSendEmailNewUsers.js'
import { getUserById } from '../infrastructure/getUserById.js'
import { sendEmailToNewUser } from '../infrastructure/sendEmailToNewUser.js'

export const sendEmailtoNewUser = async (ctx) => {
  const emailsInQueue = await getFromQueueSendEmailNewUsers(ctx)
  if (!emailsInQueue) return true
  emailsInQueue.map(async (emailInQueue) => {
    const user = await getUserById(ctx, emailInQueue.userId)
    await sendEmailToNewUser(ctx, user, emailInQueue.id)
    return true
  })
  return true
}
