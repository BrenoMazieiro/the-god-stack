import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useMyContext } from 'hooks'
import {
  Form, LabeledInput, Button, Div, A,
} from 'components'

const ErrorWrapper = styled(Div)`
  display: flex;
  align-items: center;
  align-self: center;
  color: ${({ theme }) => theme.colors.actions.error};
`
const LinkWrapper = styled(Div)`
  display: flex;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.text[0]};
`

const LoginForm = ({
  handleSubmit, username, password, errorMessage,
}) => {
  const { theme } = useMyContext()
  return (
    <Form handleSubmit={handleSubmit} id="LoginForm">
      <LabeledInput
        type="text"
        id="username"
        label="Username"
        ref={username}
        placeholder="Username"
        errorMessages={[]}
      />
      <LabeledInput
        type="password"
        id="password"
        label="Password"
        ref={password}
        errorMessages={[]}
      />
      <Button type="submit" size="sm">SignIn</Button>
      {errorMessage && <ErrorWrapper id="errorMessage" theme={theme}>{errorMessage}</ErrorWrapper>}
      <LinkWrapper theme={theme}>
        Not Singed Up?
        &nbsp;
        <A href="/signup">Sign Up</A>
      </LinkWrapper>
    </Form>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.any.isRequired,
  password: PropTypes.any.isRequired,
  errorMessage: PropTypes.string,
}

export default LoginForm
