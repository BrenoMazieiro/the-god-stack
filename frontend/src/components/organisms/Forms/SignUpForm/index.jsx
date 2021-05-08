import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useMyContext } from 'hooks'
import {
  Form, LabeledInput, Button, Div, A,
} from 'components'

const LinkWrapper = styled(Div)`
  display: flex;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.text[0]};
`

const SignUpForm = ({
  handleSubmit, name, email, username, password, confirmPassword, errorMessages,
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
        errorMessages={errorMessages}
      />
      <LabeledInput
        type="text"
        id="email"
        label="Email"
        ref={email}
        placeholder="Email"
        errorMessages={errorMessages}
      />
      <LabeledInput
        type="text"
        id="username"
        label="Username"
        ref={username}
        placeholder="Username"
        errorMessages={errorMessages}
      />
      <LabeledInput
        type="password"
        id="password"
        label="Password"
        ref={password}
        errorMessages={errorMessages}
      />
      <LabeledInput
        type="password"
        id="confirmPassword"
        label="Confirm Password"
        ref={confirmPassword}
        errorMessages={errorMessages}
      />
      <Button type="submit" size="sm">Sign Up</Button>
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
  errorMessages: PropTypes.array,
}

export default SignUpForm
