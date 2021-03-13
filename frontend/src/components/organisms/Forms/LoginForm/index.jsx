import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useMyContext } from 'hooks'
import {
  Form, LabeledInput, Button, Div,
} from 'components'

const ErrorWrapper = styled(Div)`
  display: flex;
  align-items: center;
  align-self: center;
  color: ${({ theme }) => theme.colors.actions.error};
`

const LoginForm = ({
  handleSubmit, username, password, errorMessage,
}) => {
  const { theme } = useMyContext()
  return (
    <Form handleSubmit={handleSubmit}>
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
      <Button type="submit" size="sm">Logar</Button>
      {errorMessage && <ErrorWrapper theme={theme}>{errorMessage}</ErrorWrapper>}
    </Form>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.any.isRequired,
  password: PropTypes.any.isRequired,
  errorMessage: PropTypes.string,
}

export { LoginForm }
