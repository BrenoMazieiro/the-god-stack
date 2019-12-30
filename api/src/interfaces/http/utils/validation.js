import { ApolloError } from 'apollo-server'
const moment = require('moment')

/* Checks for required values */
const required = (value) => {
  return !value
}

/* Checks max value allowed */
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

/* Checks min value allowed */
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

/* Checks if number */
const numberValue = (value) => {
  if (required(value)) {
    return false
  }
  return isNaN(value)
}

/* Checks for min and max */
const length = (value, minimo, maximo) => {
  return !required(value) && (min(value, minimo) || max(value, maximo))
}

/* Verifica o valor minimo e maximo permitido */
const enumValue = (value, enums) => {
  return enums.find(e => e === value) === undefined
}

/* Checks for email */
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

/* Chekcs for brazilian personal ID */
const cpf = (value) => {
  if (required(value)) {
    return false
  }
  const clearValue = value.replace(/[^0-9]/g, '')

  if (clearValue.length != 11 || 
		clearValue == "00000000000" || 
		clearValue == "11111111111" || 
		clearValue == "22222222222" || 
		clearValue == "33333333333" || 
		clearValue == "44444444444" || 
		clearValue == "55555555555" || 
		clearValue == "66666666666" || 
		clearValue == "77777777777" || 
		clearValue == "88888888888" || 
		clearValue == "99999999999")
      return false
   
  let add = 0	
  
  for (let i=0; i < 9; i ++)		
    add += parseInt(clearValue.charAt(i)) * (10 - i)
    let rev = 11 - (add % 11)
    if (rev == 10 || rev == 11)		
      rev = 0
      if (rev != parseInt(clearValue.charAt(9)))		
         return false	
      add = 0
      for (i = 0; i < 10; i ++)		
         add += parseInt(clearValue.charAt(i)) * (11 - i)
         rev = 11 - (add % 11)	
      if (rev == 10 || rev == 11)	
         rev = 0
      if (rev != parseInt(clearValue.charAt(10)))
        return false	    

  if (clearValue.length === 14 || clearValue.length === 11) return true
  return false
}

/*Checks for brazilian company ID */
const cnpj = (value) => {

  const cnpj = value.replace(/[^\d]+/g,'')
 
  if(cnpj == '') return false

  if (cnpj.length != 14)
  return false

  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" || 
    cnpj == "11111111111111" || 
    cnpj == "22222222222222" || 
    cnpj == "33333333333333" || 
    cnpj == "44444444444444" || 
    cnpj == "55555555555555" || 
    cnpj == "66666666666666" || 
    cnpj == "77777777777777" || 
    cnpj == "88888888888888" || 
    cnpj == "99999999999999")
    return false
    
    let cnpjLength = cnpj.length - 2
    let numbers = cnpj.substring(0,cnpjLength)
    let digits = cnpj.substring(numbers)
    let sum = 0
    let pos = cnpjLength - 7
    for (let i = cnpjLength; i >= 1; i--) {
        sum += numbers.charAt(cnpjLength - i) * pos--
    if (pos < 2)
        pos = 9
    }
    let result = sum % 11 < 2 ? 0 : 11 - sum % 11
    if (result != digits.charAt(0))
      return false
    
      cnpjLength = cnpjLength + 1
      numbers = cnpj.substring(0,cnpjLength)
      sum = 0
      pos = cnpjLength - 7
      for (i = cnpjLength; i >= 1; i--) {
        sum += numbers.charAt(cnpjLength - i) * pos--
        if (pos < 2)
          pos = 9
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11
        if (result != digits.charAt(1))
          return false
        
    return true
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
        case 'required':
          return required(value) ? 'Required Field' : null
        case 'cpf':
          return !cpf(value) ? 'Invalid CPF' : null
        case 'cnpj':
          return !cnpj(value) ? 'Invalid CNPJ' : null  
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
* It will throw an ApolloError if an erron was found
*/
export const validation = (value, rules) => {
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
    throw new ApolloError('There was error(s) validating the params!', 'form_arguments_invalid', errors)
  }

  return true
}
