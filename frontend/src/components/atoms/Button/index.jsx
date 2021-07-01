import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useMyContext } from 'hooks'

const ButtonWrapper = styled.button`
  margin: 5px;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  align-self: center;
  color: ${({ theme }) => theme.colors.text[0]};  
  font-size: ${({ theme, size }) => theme.sizes.text[size]};
  background-color: ${({ theme }) => theme.colors.primary[0]};
`

const Button = ({
  type, size = 'lg', children, onClick,
}) => {
  const { theme } = useMyContext()
  return (
    <ButtonWrapper
      type={type}
      theme={theme}
      size={size}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
}

export default Button
