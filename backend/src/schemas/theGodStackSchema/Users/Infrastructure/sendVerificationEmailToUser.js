import hardDeleteUser from './hardDeleteUser.js'

export default async (ctx, user, approvalToken) => {
  const msg = {
    to: user[0].email,
    from: process.env.EMAIL_FROM || 'breno.mazieiro@vigil.global',
    subject: ctx.core.email.templates.userRegistrationEmailTemplateSubject(),
    text: ctx.core.email.templates.userRegistrationEmailTemplateText(approvalToken),
    html: ctx.core.email.templates.userRegistrationEmailTemplateHtml(approvalToken),
  }
  const emailErrors = await ctx.core.email.emailSender(ctx, msg)
  if (!emailErrors) { return user }

  /** Will hard user if email not sent */
  await hardDeleteUser(ctx, user.id)
  if (emailErrors.response) {
    ctx.core.errorHandling('I could not send an email, and could not create the user!', 'email_not_send', emailErrors.response.body)
  }
  ctx.core.errorHandling('I could not send an email, and could not create the user!', 'email_not_send', emailErrors)
  return null
}
