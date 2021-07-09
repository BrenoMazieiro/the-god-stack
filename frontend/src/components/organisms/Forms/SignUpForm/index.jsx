import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useMyContext } from 'hooks'
import {
  Form, Textfield, A, Span, IconButton, Title, Div,
} from 'components'

const StyledText = styled(Span)`
  display: flex;
  align-items: center;
  align-self: center;
`

const LinkWrapper = styled(Span)`
  display: flex;
  align-items: center;
  align-self: center;
  margin-top: 20px;
`
const StyledForm = styled(Form)`
  padding: ${({ theme }) => theme.sizes.spacing[5]};
  border-radius: ${({ theme }) => theme.sizes.spacing[4]};
  background-color: ${({ theme }) => theme.colors[theme.background.secondary.color][theme.background.secondary.intensity]};
  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.08), 0px 4px 56px rgba(0, 0, 0, 0.08);
`
const HeaderWrapper = styled(Div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.sizes.spacing[3]};
`

const SignUpForm = ({
  handleSubmit,
  name,
  email,
  username,
  password,
  confirmPassword,
  errorMessages,
  serverErrorCode,
}) => {
  const { t } = useMyContext()

  const getErrors = (field, errors) => {
    return `${errors.reduce((acc, error) => error.path === field ? `${acc} - ${error.message} <br/>` : acc, '')}`
  }

  const hasErrors = (field, errors) => {
    return errors.find((error) => error.path === field)
  }

  return (
    <StyledForm handleSubmit={handleSubmit} id="SignUpForm">
      <HeaderWrapper>
        <Title size={4}>Create an account</Title>
        <Span>Give us some of your information to get free access</Span>
      </HeaderWrapper>
      <Textfield
        id="name"
        type="text"
        reference={name}
        placeholder={t['organisms:Forms:SignUpForm:Name']}
        leftIconName="userCircle"
        helper={getErrors('name', errorMessages)}
        status={hasErrors('name', errorMessages) ? 'error' : null}
      />
      <Textfield
        id="email"
        type="text"
        reference={email}
        placeholder={t['organisms:Forms:SignUpForm:Email']}
        leftIconName="mail"
        helper={getErrors('email', errorMessages)}
        status={hasErrors('email', errorMessages) ? 'error' : null}
      />
      <Textfield
        id="username"
        type="text"
        reference={username}
        placeholder={t['organisms:Forms:SignUpForm:Username']}
        leftIconName="id"
        helper={getErrors('username', errorMessages)}
        status={hasErrors('username', errorMessages) ? 'error' : null}
      />
      <Textfield
        id="password"
        type="password"
        reference={password}
        placeholder={t['organisms:Forms:SignUpForm:Password']}
        leftIconName="lock"
        helper={getErrors('password', errorMessages)}
        status={hasErrors('password', errorMessages) ? 'error' : null}
      />
      <Textfield
        id="confirmPassword"
        type="password"
        reference={confirmPassword}
        placeholder={t['organisms:Forms:SignUpForm:ConfirmPassword']}
        leftIconName="lock"
        helper={getErrors('confirmPassword', errorMessages)}
        status={hasErrors('confirmPassword', errorMessages) ? 'error' : null}
      />
      {serverErrorCode && (
        <StyledText color="red" id="serverErrorCode">
          {t[`organisms:Forms:SignUpForm:${serverErrorCode}`]}
        </StyledText>
      )}
      <IconButton
        type="submit"
        size="lg"
        bgColor="blue"
        color="white"
        iconname="arrowRight"
        iconsize="md"
        iconposition="right"
        fullWidth
      >
        {t['organisms:Forms:SignUpForm:SignUp']}
      </IconButton>
      <LinkWrapper>
        {t['organisms:Forms:SignUpForm:AlreadySignUp']}
        &nbsp;
        <A href="/signin">{t['organisms:Forms:SignUpForm:SignIn']}</A>
      </LinkWrapper>
    </StyledForm>
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
  serverErrorCode: PropTypes.string,
}

export default SignUpForm
