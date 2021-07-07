import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme, color }) => theme.colors[color || 'gray'][theme.text[1]]};
  font-size: ${({ theme, textsize }) => theme.fonts.size[textsize || 'md']};
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
`

const Span = ({
  id, children, className, textsize, bold, color, onClick,
}) => {
  return (
    <Wrapper
      id={id}
      className={className}
      textsize={textsize}
      bold={bold}
      color={color}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  )
}

Span.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  textsize: PropTypes.oneOf(['sm', 'md', 'lg']),
  bold: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'black', 'gray', 'blue', 'pink', 'green', 'yellow', 'orange', 'red', 'purple']),
  onClick: PropTypes.func,
}

export default Span
