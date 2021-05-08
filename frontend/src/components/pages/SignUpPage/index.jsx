import React, { useCallback, useRef, useState } from 'react'

import { useMutation } from '@apollo/client'
import { GenericTemplate, SignUpForm } from 'components'
import { CreateUser } from 'gql'
import { useMyContext } from 'hooks'
import { createUserModel } from './validation'

const SignUpPage = () => {
  const [createUser] = useMutation(CreateUser)
  const { history } = useMyContext()
  const [errorMessages, setErroMessages] = useState([])
  const name = useRef()
  const email = useRef()
  const username = useRef()
  const password = useRef()
  const confirmPassword = useRef()

  const handleFail = (err) => {
    const errors = err.inner.map((e) => {
      return {
        path: e.path,
        message: e.message,
      }
    })
    setErroMessages(errors)
  }
  const handleSuccess = () => {
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
        setErroMessages(e.graphQLErrors[0].message)
      })
  }

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      const userData = {
        name: name.current.value,
        email: email.current.value,
        username: username.current.value,
        password: password.current.value,
        confirmPassword: confirmPassword.current.value,
      }
      createUserModel({ handleSuccess, handleFail, userData })

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
        errorMessages={errorMessages}
      />
    </GenericTemplate>
  )
}

export default SignUpPage
