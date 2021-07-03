import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  width: ${({ fullWidth }) => fullWidth && '100%'};
  padding: ${({ theme, size }) => theme.sizes.button[size].padding};
  border-radius: ${({ theme, size }) => theme.sizes.button[size].radius};
  border: ${({ theme, bgColor }) => bgColor ? '0' : `1px solid ${theme.colors.gray[theme.text[2]]}`};
  align-self: center;
  color: ${({ theme, color }) => theme.colors[color][theme.primary[0]]};
  background-color: ${({ theme, bgColor }) => bgColor ? theme.colors[bgColor][theme.primary[0]] : 'transparent'};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme, size }) => theme.sizes.button[size].size};
  line-height: ${({ theme, size }) => theme.sizes.button[size].lineHeight};
  letter-spacing: ${({ theme, size }) => theme.sizes.button[size].letterSpacing};
  
  :hover {
    border: ${({ theme, bgColor }) => bgColor ? '0' : `1px solid ${theme.colors.blue[theme.primary[1]]}`};
    background-color: ${({ theme, bgColor }) => bgColor ? theme.colors[bgColor][theme.primary[1]] : 'transparent'};
  }
  :disabled {
    color: ${({ theme }) => theme.colors.gray[theme.text[1]]};  
    background-color: ${({ theme, bgColor }) => bgColor ? theme.colors[bgColor][theme.primary[2]] : 'transparent'};
  }

  :focus {
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 5px ${({ theme }) => `${theme.colors.blue[theme.primary[0]]}`};
    background-color: ${({ theme, bgColor }) => bgColor ? theme.colors[bgColor][theme.primary[1]] : 'transparent'};
  }
`

const Button = ({
  type, size = 'lg', children, onClick, bgColor, color = 'blue', disabled, fullWidth,
}) => {
  return (
    <ButtonWrapper
      type={type}
      size={size}
      onClick={onClick}
      color={color}
      bgColor={bgColor}
      disabled={disabled}
      fullWidth={fullWidth}
      onMouseUp={(e) => e.target.blur()}
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
  bgColor: PropTypes.oneOf(['black', 'gray', 'blue', 'pink', 'green', 'yellow', 'orange', 'red', 'purple', '']),
  color: PropTypes.oneOf(['white', 'black', 'gray', 'blue', 'pink', 'green', 'yellow', 'orange', 'red', 'purple']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
}

export default Button
