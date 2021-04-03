import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DivWrapper = styled.div``

const Div = ({ children, className, id }) => {
  return (
    <DivWrapper className={className} id={id}>
      {children}
    </DivWrapper>
  )
}

Div.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.any,
}

export default Div
