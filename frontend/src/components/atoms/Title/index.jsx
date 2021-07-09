import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.span`
  color: ${({ theme, color }) => theme.colors[color || 'gray'][theme.text[1]]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme, size }) => theme.sizes.title.size[size]};
  line-height: ${({ theme, size }) => theme.sizes.title.lineHeight[size]};
  font-weight: ${({ theme, size }) => theme.sizes.title.weight[size]};
`

const Title = ({
  id, children, className, size, color,
}) => {
  return <Wrapper id={id} className={className} size={size} color={color}>{children}</Wrapper>
}

Title.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  size: PropTypes.oneOf([1, 2, 3, 4, 5]),
  color: PropTypes.oneOf(['white', 'black', 'gray', 'blue', 'pink', 'green', 'yellow', 'orange', 'red', 'purple']),
}

export default Title
