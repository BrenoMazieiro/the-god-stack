import { ApolloError } from 'apollo-server'
const moment = require('moment')

/* Verifica se o valor esta setado */
const required = (value) => {
  return !value
}

/* Verifica o valor maximo permitido */
const max = (value, max) => {
  if (required(value)) {
    return false
  }
  if (typeof value === 'string') {
    return value.length > Number(max)
  }
  if (typeof value === 'number') {
    return value > Number(max)
  }
  if (value instanceof Date) {
    if (max === 'now') {
      return moment(value).isAfter(moment())
    }
    return moment(value).isAfter(moment(max))
  }
  return false
}

/* Verifica o valor minimo permitido */
const min = (value, min) => {
  if (required(value)) {
    return false
  }
  if (typeof value === 'string') {
    return value.length < Number(min)
  }
  if (typeof value === 'number') {
    return value < Number(min)
  }
  if (value instanceof Date) {
    if (min === 'now') {
      return moment(value).isBefore(moment())
    }
    return moment(value).isBefore(moment(min))
  }
  return false
}

/* Verifica se o valor e um numero */
const numberValue = (value) => {
  if (required(value)) {
    return false
  }
  return isNaN(value)
}

/* Verifica o valor minimo e maximo permitido */
const length = (value, minimo, maximo) => {
  return !required(value) && (min(value, minimo) || max(value, maximo))
}

/* Verifica o valor minimo e maximo permitido */
const enumValue = (value, enums) => {
  return enums.find(e => e === value) === undefined
}

/* Verifica o valor minimo e maximo permitido */
const email = (email) => {
  if (!email || email.length > 254){
    return true
  }

  // eslint-disable-next-line no-useless-escape
  const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
  const valid = tester.test(email)
  if (!valid){
    return true
  }

  // Further checking of some things regex can't handle
  const parts = email.split("@")
  if (parts[0].length > 64){
    return true
  }

  const domainParts = parts[1].split(".")
  if (domainParts.some(part => part.length > 63 )){
    return true
  }

  return false
}

const cpfCnpj = (value) => {
  if (required(value)) {
    return false
  }
  const clearValue = value.replace(/[^0-9]/g, '')
  if (clearValue.length === 14 || clearValue.length === 11) return true
  return false
}

const validationField = (value, test) => {
  return test.split('|')
    .map(rule => rule.trim())
    .filter(rule => !!rule)
    .map(rule => {
      const [method, ...params] = rule.split(':')
      const [minValue, maxValue] = params
      switch (method) {
        case 'max':
          return max(value, params) ? `Valor deve ter no máximo ${maxValue}` : null
        case 'min':
          return min(value, params) ? `Valor deve ter no mínimo ${minValue}` : null
        case 'length':
          return length(value, minValue, maxValue) ? `Valor deve ter o tamanho entre ${minValue} e ${maxValue}` : null
        case 'enum':
          return enumValue(value, params) ? 'Valor enum inesperado' : null
        case 'number':
          return numberValue(value) ? 'Número inválido' : null
        case 'email':
          return email(value) ? 'Email inválido' : null
        case 'required':
          return required(value) ? 'Campo obrigatório' : null
        case 'cpfCnpj':
          return !cpfCnpj(value) ? 'CPF/CNPJ inválido' : null
        default:
          return null
      }
    })
    .filter(error => error !== null)
}

const getValueObject = (key, value) => {
  if (key === undefined) {
    return null
  }
  const keys = key.split('.')
  let obj = value
  for(let i = 0; i < keys.length; i++) {
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
* Verifica o valor máximo permitido
* Retorna false quando não passa em alguma validação
*/
export default (value, rules) => {
  if (rules === undefined) {
    return true
  }

  const errors = rules
    .map(rule => Object.assign({key: '', message: '', test: ''}, rule))
    .map(({ key, message, test }) => {
      const resultValidation = validationField(getValueObject(key, value), test)
      return resultValidation.length > 0 ? { key, messages: [!message ? resultValidation : message] } : null
    })
    .filter(error => error !== null)

  if (errors.length) {
    throw new ApolloError('Houveram erros validando os parametros!', 'form_arguments_invalid', errors)
  }

  return true
}
