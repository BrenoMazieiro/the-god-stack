import * as yup from 'yup'

const createUserModel = ({ handleSuccess, handleFail, userData }) => {
  const userSchema = yup.object().shape({
    name: (
      yup
        .string()
        .required('Name is required!')
        .min(2, 'Name should have at least 2 digits')
        .max(150, 'Name should have no more than 150 digits')
    ),
    email: (
      yup
        .string()
        .email()
        .required('Email is required!')
        .min(2, 'Email should have at least 2 digits')
        .max(150, 'Email should have no more than 150 digits')
    ),
    username: (
      yup
        .string()
        .required('Username is required!')
        .min(2, 'Username should have at least 2 digits')
        .max(150, 'Username should have no more than 150 digits')
    ),
    password: (
      yup
        .string()
        .required('Password is required!')
        .min(8, 'Password should have at least 8 digits')
        .max(20, 'Password should have no more than 20 digits')
    ),
    confirmPassword: (
      yup
        .string()
        .required('Confirm Password is required!')
        .oneOf([yup.ref('password'), null], 'Passwords must match!')
    ),
  })
  userSchema
    .validate(userData, { abortEarly: false })
    .then(() => {
      handleSuccess()
    })
    .catch((e) => {
      handleFail(e)
    })
}

export { createUserModel }
