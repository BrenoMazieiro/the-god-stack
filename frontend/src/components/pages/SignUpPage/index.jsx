import React, { useCallback, useRef, useState } from 'react'
import * as yup from 'yup'
import { useMutation } from '@apollo/client'
import { GenericTemplate, SignUpForm } from 'components'
import { CreateUser } from 'gql'
import { useMyContext } from 'hooks'

const SignUpPage = () => {
  const [createUser] = useMutation(CreateUser)
  const { history } = useMyContext()
  const [errorMessage, setErroMessage] = useState('')
  const name = useRef()
  const email = useRef()
  const username = useRef()
  const password = useRef()
  const confirmPassword = useRef()

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      const createUserData = {
        name: name.current.value,
        email: email.current.value,
        username: username.current.value,
        password: password.current.value,
        confirmPassword: confirmPassword.current.value,
      }
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
        .validate(createUserData)
        .then(() => {
          createUser(
            {
              variables: {
                name: name.current.value,
                email: email.current.value,
                username: username.current.value,
                password: password.current.value,
              },
            },
          )
            .then(() => {
              history.push('/')
            })
            .catch((e) => {
              setErroMessage(e.graphQLErrors[0].message)
            })
        })
        .catch((e) => {
          setErroMessage(`${e.message}!`)
        })
      return true
    },
    [username, password],
  )

  return (
    <GenericTemplate id="SignUpPage">
      <SignUpForm
        handleSubmit={handleSubmit}
        name={name}
        email={email}
        username={username}
        password={password}
        confirmPassword={confirmPassword}
        errorMessage={errorMessage}
      />
    </GenericTemplate>
  )
}

export default SignUpPage
