import React, { useState, useCallback, useRef } from 'react'
import { useMyContext } from 'hooks'
import { useMutation } from '@apollo/client'
import { GenericTemplate, SignInForm, Div } from 'components'
import { UserLogin } from 'gql'

const SignInPage = () => {
  const token = localStorage.getItem('token')
  const { history } = useMyContext()
  if (token) history.push('/')
  const [signIn] = useMutation(UserLogin)
  const username = useRef()
  const password = useRef()
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      signIn(
        {
          variables: {
            username: username.current.value,
            password: password.current.value,
          },
        },
      )
        .then((data) => {
          const { token, refreshToken } = data.data.UserLogin
          localStorage.setItem('token', token)
          localStorage.setItem('refreshToken', refreshToken)
          history.push(history.location.state?.from?.pathname || '/')
        })
        .catch((e) => setErrorMessage(e.graphQLErrors[0].code))
    },
    [username, password],
  )

  return (
    <GenericTemplate id="SignInPage">
      {history.location?.state?.code === 'user_singup_successfully' && <Div id="register_success">Cadastrado com sucesso!</Div>}
      <SignInForm
        handleSubmit={handleSubmit}
        username={username}
        password={password}
        errorMessage={errorMessage}
      />
    </GenericTemplate>
  )
}

export default SignInPage
