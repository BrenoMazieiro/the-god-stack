import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ApolloConsumer } from 'react-apollo'
import { UserLogin } from 'mutations'
import {
  PageTemplate, Header, Footer, LoginForm,
} from 'components'

const LoginPage = ({ history }) => {
  const [submitting, setSubmitting] = useState(false)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [isValid, setIsValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = (e, client) => {
    e.preventDefault()
    setSubmitting(true)
    client.query({
      query: UserLogin,
      variables: { email, password },
    })
      .then((data) => {
        setSubmitting(false)
        localStorage.setItem('token', data.data.UserLogin.token)
        history.push('/')
      })
      .catch((error) => {
        setSubmitting(false)
        if (error && error.graphQLErrors && error.graphQLErrors[0].code === 'user_or_password_incorrect') {
          setIsValid(false)
          setErrorMessage(error.graphQLErrors[0].message)
        }
      })
  }

  if (email && password) {
    if (!isValid) setIsValid(true)
  }

  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <ApolloConsumer>
        {
        (client) => (
          <LoginForm
            handleSubmit={handleSubmit}
            submitting={submitting}
            setEmail={setEmail}
            setPassword={setPassword}
            setIsValid={setIsValid}
            isValid={isValid}
            client={client}
            errorMessage={errorMessage}
          />
        )
      }
      </ApolloConsumer>
    </PageTemplate>
  )
}

LoginPage.propTypes = {
  history: PropTypes.object,
}

export default LoginPage
