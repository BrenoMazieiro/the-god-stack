import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useMyContext } from 'hooks'
import {
  Form, A, Textfield, Text, IconButton,
} from 'components'

const StyledText = styled(Text)`
  display: flex;
  align-items: center;
  align-self: center;
`
const LinkWrapper = styled(Text)`
  display: flex;
  align-items: center;
  align-self: center;
  margin-top: 20px;
`
const StyledForm = styled(Form)`
  padding: ${({ theme }) => theme.sizes.spacing[4]};
  border-radius: ${({ theme }) => theme.sizes.spacing[3]};
  background-color: ${({ theme }) => theme.colors[theme.background.secondary.color][theme.background.secondary.intensity]};
`

const SignInForm = ({
  handleSubmit, username, password, errorMessage,
}) => {
  const { t } = useMyContext()
  return (
    <StyledForm handleSubmit={handleSubmit} id="SignInForm">
      <Textfield
        id="username"
        type="text"
        reference={username}
        placeholder={t['organisms:Forms:SignInForm:Username']}
        status={errorMessage ? 'error' : null}
      />
      <Textfield
        id="password"
        type="password"
        reference={password}
        placeholder={t['organisms:Forms:SignInForm:Password']}
        status={errorMessage ? 'error' : null}
      />
      <IconButton
        type="submit"
        size="md"
        bgColor="blue"
        color="white"
        iconname="arrowAltCircleRight"
        iconposition="right"
        fullWidth
      >
        {t['organisms:Forms:SignInForm:SignIn']}
      </IconButton>
      {errorMessage && (
        <StyledText color="red">
          {t[`organisms:Forms:SignInForm:${errorMessage}`]}
        </StyledText>
      )}
      <LinkWrapper>
        {t['organisms:Forms:SignInForm:notSignedUp']}
        &nbsp;
        <A href="/signup">{t['organisms:Forms:SignInForm:createAnAccount']}</A>
      </LinkWrapper>
    </StyledForm>
  )
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.any.isRequired,
  password: PropTypes.any.isRequired,
  errorMessage: PropTypes.string,
}

export default SignInForm
