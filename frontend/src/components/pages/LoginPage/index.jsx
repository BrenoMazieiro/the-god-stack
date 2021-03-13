import React, { useState, useCallback, useRef } from 'react'
import { useMyContext } from 'hooks'
import { useMutation } from '@apollo/client'
import { GenericTemplate, LoginForm } from 'components'
import { UserLogin } from 'gql'

const LoginPage = () => {
  const token = localStorage.getItem('token')
  const { history } = useMyContext()
  if (token) history.push('/')
  const [login] = useMutation(UserLogin)
  const username = useRef()
  const password = useRef()
  const [errorMessage, setErroMessage] = useState('')

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      login(
        {
          variables: {
            username: username.current.value,
            password: password.current.value,
          },
        },
      ).then((data) => {
        const { token, refreshToken } = data.data.UserLogin
        localStorage.setItem('token', token)
        localStorage.setItem('refreshToken', refreshToken)
        history.push('/')
      })
        .catch((e) => setErroMessage(e.graphQLErrors[0].message))
    },
    [username, password],
  )

  return (
    <GenericTemplate>
      <LoginForm handleSubmit={handleSubmit} username={username} password={password} errorMessage={errorMessage} />
    </GenericTemplate>
  )
}

export { LoginPage }
