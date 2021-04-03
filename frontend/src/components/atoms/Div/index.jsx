import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DivWrapper = styled.div``

const Div = ({ children, className }) => {
  return (
    <DivWrapper className={className}>
      {children}
    </DivWrapper>
  )
}

Div.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
}

export default Div
