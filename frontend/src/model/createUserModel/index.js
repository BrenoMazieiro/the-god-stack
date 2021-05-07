import * as yup from 'yup'

const createUserModel = ({ handleSuccess, handleFail, userData }) => {
  const schema = yup.object().shape({
    name: (
      yup
        .string()
        .required()
        .min(2, 'Name should have at least 2 digits')
        .max(150, 'Name should have no more than 150 digits')
    ),
    email: (
      yup
        .string()
        .email()
        .required()
        .min(2, 'Email should have at least 2 digits')
        .max(150, 'Email should have no more than 150 digits')
    ),
    username: (
      yup
        .string()
        .required()
        .min(2, 'Username should have at least 2 digits')
        .max(150, 'Username should have no more than 150 digits')
    ),
    password: (
      yup
        .string()
        .required()
        .min(8, 'Password should have at least 8 digits')
        .max(20, 'Password should have no more than 20 digits')
    ),
    confirmPassword: (
      yup
        .string()
        .required()
        .oneOf([yup.ref('password'), null], 'Passwords must match!')
    ),
  })
  schema
    .validate(userData)
    .then(() => {
      handleSuccess()
    })
    .catch((e) => {
      handleFail(e)
    })
}

export default createUserModel
