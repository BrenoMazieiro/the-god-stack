import { emailSender } from './SendGrid.js'
import { emailTemplates } from './templates/index.js'

export const email = {
  emailSender,
  templates: emailTemplates,
}
