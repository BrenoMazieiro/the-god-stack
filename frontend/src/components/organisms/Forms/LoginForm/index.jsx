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
  const { theme, t } = useMyContext()
  return (
    <Form handleSubmit={handleSubmit} id="LoginForm">
      <LabeledInput
        type="text"
        id="username"
        label={t['organisms:Forms:LoginForm:Username']}
        ref={username}
        placeholder={t['organisms:Forms:LoginForm:Username']}
        errorMessages={[]}
      />
      <LabeledInput
        type="password"
        id="password"
        label={t['organisms:Forms:LoginForm:Password']}
        ref={password}
        placeholder={t['organisms:Forms:LoginForm:Password']}
        errorMessages={[]}
      />
      <Button type="submit" size="sm">{t['organisms:Forms:LoginForm:SignIn']}</Button>
      {errorMessage && (
      <ErrorWrapper id="errorMessage" theme={theme}>
        {t[`organisms:Forms:LoginForm:${errorMessage}`]}
      </ErrorWrapper>
      )}
      <LinkWrapper theme={theme}>
        {t['organisms:Forms:LoginForm:notSignedUp']}
        &nbsp;
        <A href="/signup">{t['organisms:Forms:LoginForm:createAnAccount']}</A>
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
