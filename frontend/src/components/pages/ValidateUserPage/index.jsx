import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import { GenericTemplate } from 'components'
import { useMyContext } from 'hooks'
import { ValidateUser } from 'gql'

const ValidateUserPage = () => {
  const { params: { token }, history } = useMyContext()
  const [validateUser, { loading, error }] = useMutation(ValidateUser)

  useEffect(() => {
    validateUser({ variables: { token } })
      .then((data) => {
        const { token, refreshToken } = data.data.ValidateUser
        localStorage.setItem('token', token)
        localStorage.setItem('refreshToken', refreshToken)
        history.push('/', { type: 'validateUser' })
      })
      .catch((error) => { console.log(error) })
  }, [token])

  if (loading) {
    return (
      <GenericTemplate id="ValidateUserPageLoading">
        Loading
      </GenericTemplate>
    )
  }

  if (error) {
    return (
      <GenericTemplate id="ValidateUserPageError">
        This is not a valid Token!
      </GenericTemplate>
    )
  }

  return (
    <GenericTemplate id="ValidateUserPage">
      Teste
    </GenericTemplate>
  )
}

export default ValidateUserPage
