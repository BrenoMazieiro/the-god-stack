import { softDeleteQueue } from './softDeleteQueue.js'

export const sendEmailToNewUser = async (ctx, user, queueId) => {
  const msg = {
    to: user.email,
    from: process.env.EMAIL_FROM || 'thiago@thiagocosta.me',
    subject: ctx.core.email.templates.userRegistrationEmailTemplateSubject(),
    text: ctx.core.email.templates.userRegistrationEmailTemplateText(user.approvalToken),
    html: ctx.core.email.templates.userRegistrationEmailTemplateHtml(user.approvalToken),
  }
  const emailErrors = await ctx.core.email.emailSender(ctx, msg)
  if (!emailErrors) {
    return softDeleteQueue(ctx, queueId)
  }

  if (emailErrors.response) {
    ctx.core.workerErrorHandling('I could not send an email, and could not create the user!', 'email_not_send', emailErrors.response.body)
    return false
  }
  ctx.core.workerErrorHandling('I could not send an email, and could not create the user!', 'email_not_send', emailErrors)
  return false
}
