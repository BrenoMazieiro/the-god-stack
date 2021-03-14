const userRegistrationEmailTemplateHtml = (code) => `
  <strong>Please access this link in order to verify your account: <BR><BR>http://${process.env.SPA_URL}/verify?token=${code}</strong>
`

const userRegistrationEmailTemplateText = (code) => `
  Please access this link in order to verify your account: http://${process.env.SPA_URL}/verify?token=${code}!
`

const userRegistrationEmailTemplateSubject = () => `
 User Registration - TheGodStack
`

export {
  userRegistrationEmailTemplateHtml,
  userRegistrationEmailTemplateText,
  userRegistrationEmailTemplateSubject,
}
