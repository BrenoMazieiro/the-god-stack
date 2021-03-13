import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || 'SG.outsider')

const emailSender = async (ctx, msg) => {
  try {
    await sgMail.send(msg)
    return null
  } catch (error) {
    return error
  }
}

export { emailSender }
