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
  text-transform:capitalize;
  margin-top: 10px;
`

const LinkWrapper = styled(Div)`
  display: flex;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.text[0]};
`

const SignUpForm = ({
  handleSubmit, name, email, username, password, confirmPassword, errorMessage,
}) => {
  const { theme } = useMyContext()
  return (
    <Form handleSubmit={handleSubmit} id="SignUpForm">
      <LabeledInput
        type="text"
        id="name"
        label="Name"
        ref={name}
        placeholder="Name"
      />
      <LabeledInput
        type="text"
        id="email"
        label="Email"
        ref={email}
        placeholder="Email"
      />
      <LabeledInput
        type="text"
        id="username"
        label="Username"
        ref={username}
        placeholder="Username"
      />
      <LabeledInput
        type="password"
        id="password"
        label="Password"
        ref={password}
      />
      <LabeledInput
        type="password"
        id="confirmPassword"
        label="Confirm Password"
        ref={confirmPassword}
      />
      <Button type="submit" size="sm">Sign Up</Button>
      {errorMessage && <ErrorWrapper id="errorMessage" theme={theme}>{errorMessage}</ErrorWrapper>}
      <LinkWrapper theme={theme}>
        Already Singed Up?
        &nbsp;
        <A href="/login">Login</A>
      </LinkWrapper>
    </Form>
  )
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.any.isRequired,
  email: PropTypes.any.isRequired,
  username: PropTypes.any.isRequired,
  password: PropTypes.any.isRequired,
  confirmPassword: PropTypes.any.isRequired,
  errorMessage: PropTypes.string,
}

export default SignUpForm
