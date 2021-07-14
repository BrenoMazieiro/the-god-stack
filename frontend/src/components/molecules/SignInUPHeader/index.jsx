import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Div, Span } from 'components'
import { useMyContext } from 'hooks'
import Toggle from '../Toggle'

const Config = styled(Div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes.spacing[4]};
`
const LanguagesWrapper = styled(Span)`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
`

const SignInUPHeader = ({ id }) => {
  const { changeLanguage, toggleTheme } = useMyContext()
  const [checked, setChecked] = useState(false)
  const toggleThemeCheckbox = useRef()
  const handleClick = () => {
    setChecked(!checked)
    toggleTheme()
  }
  return (
    <Config id={id}>
      <LanguagesWrapper>
        <Div onClick={() => changeLanguage('pt-BR')}>BR</Div>
        <Div onClick={() => changeLanguage('ES')}>ES</Div>
        <Div onClick={() => changeLanguage('EN')}>EN</Div>
      </LanguagesWrapper>
      <Span><Toggle label="Dark Mode" onClick={handleClick} checked={checked} reference={toggleThemeCheckbox} /></Span>
    </Config>
  )
}

SignInUPHeader.propTypes = {
  id: PropTypes.string,
}

export default SignInUPHeader
