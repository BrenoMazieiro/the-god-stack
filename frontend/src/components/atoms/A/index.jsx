import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledA = styled.a``

const A = ({
  children, className, id, href,
}) => {
  return (
    <StyledA href={href} className={className} id={id}>{children}</StyledA>
  )
}

A.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.any,
  href: PropTypes.string,
}

export default A
