import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DivWrapper = styled.div``

const Div = ({ children, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <DivWrapper {...props}>
      {children}
    </DivWrapper>
  )
}

Div.propTypes = {
  children: PropTypes.any,
}

export { Div }
