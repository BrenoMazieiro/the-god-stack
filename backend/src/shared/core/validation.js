import APS from 'apollo-server'
// import moment from 'moment'

/* Checks for required values */
const required = (value) => !value

/* Checks max value allowed */
const max = (value, maxValue) => {
  if (required(value)) {
    return false
  }
  if (typeof value === 'string') {
    return value.length > Number(maxValue)
  }
  if (typeof value === 'number') {
    return value > Number(maxValue)
  }
  // if (value instanceof Date) {
  //   if (maxValue === 'now') {
  //     return moment(value).isAfter(moment())
  //   }
  //   return moment(value).isAfter(moment(maxValue))
  // }
  return false
}

/* Checks min value allowed */
const min = (value, minValue) => {
  if (required(value)) {
    return false
  }
  if (typeof value === 'string') {
    return value.length < Number(minValue)
  }
  if (typeof value === 'number') {
    return value < Number(minValue)
  }
  // if (value instanceof Date) {
  //   if (minValue === 'now') {
  //     return moment(value).isBefore(moment())
  //   }
  //   return moment(value).isBefore(moment(minValue))
  // }
  return false
}

/* Checks if number */
const numberValue = (value) => {
  if (required(value)) {
    return false
  }
  // eslint-disable-next-line no-restricted-globals
  return isNaN(value)
}

/* Checks for min and max */
const length = (value, minimo, maximo) => {
  const valueString = value && value.toString()
  return !required(valueString) && (min(valueString, minimo) || max(valueString, maximo))
}

/* Verifica o valor minimo e maximo permitido */
const enumValue = (value, enums) => enums.find((e) => e === value) === undefined

/* Checks for email */
const email = (emailValue) => {
  if (!emailValue || emailValue.length > 254) {
    return true
  }

  // eslint-disable-next-line no-useless-escape
  const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
  const valid = tester.test(emailValue)
  if (!valid) {
    return true
  }

  // Further checking of some things regex can't handle
  const parts = emailValue.split('@')
  if (parts[0].length > 64) {
    return true
  }

  const domainParts = parts[1].split('.')
  return domainParts.some((part) => part.length > 63)
}

const emailDomain = (userEmail) => [process.env.COMPANY_DOMAIN || 'thegodstack.com'].includes(userEmail.split('@')[1])

const validationField = (value, test) => test.split('|')
  .map((rule) => rule.trim())
  .filter((rule) => !!rule)
  .map((rule) => {
    const [method, ...params] = rule.split(':')
    const [minValue, maxValue] = params
    switch (method) {
      case 'max':
        return max(value, params) ? `The max value lenght should be ${maxValue}` : null
      case 'min':
        return min(value, params) ? `The max value lenght should be ${minValue}` : null
      case 'length':
        return length(value, minValue, maxValue) ? `The value lenght should be between ${minValue} and ${maxValue}` : null
      case 'enum':
        return enumValue(value, params) ? 'An enum value was expected' : null
      case 'number':
        return numberValue(value) ? 'An number was expected' : null
      case 'email':
        return email(value) ? 'Invalid Email' : null
      case 'emailDomain':
        return !emailDomain(value) ? 'Invalid Email Domain' : null
      case 'required':
        return required(value) ? 'Required Field' : null
      default:
        return null
    }
  })
  .filter((error) => error !== null)

const getValueObject = (key, value) => {
  if (key === undefined) {
    return null
  }
  const keys = key.split('.')
  let obj = value
  for (let i = 0; i < keys.length; i += 1) {
    if (!(keys[i] in obj)) {
      return null
    }
    if (i === (keys.length - 1)) {
      return obj[keys[i]]
    }
    obj = obj[keys[i]]
  }
  return null
}

/*
* It will throw an AS.ApolloError if an erron was found
*/
export const validation = (value, rules) => {
  if (rules === undefined) {
    return true
  }

  const errors = rules
    .map((rule) => ({
      key: '', message: '', test: '', ...rule,
    }))
    .map(({ key, message, test }) => {
      const resultValidation = validationField(getValueObject(key, value), test)
      return (
        resultValidation.length > 0
          ? { key, messages: [!message ? resultValidation : message] }
          : null
      )
    })
    .filter((error) => error !== null)

  if (errors.length) {
    throw new APS.ApolloError('There was error(s) validating the params!', 'params_arguments_invalid', errors)
  }

  return true
}
