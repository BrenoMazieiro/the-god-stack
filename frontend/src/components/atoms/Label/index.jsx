import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LabelWrapper = styled.label`
  &::after {
    content: ':';
  }
  @media only screen and (max-width: ${({ theme }) => theme.sizes.pagesBreakpoints.sm}) {
    &::after {
      content: '';
    }
  }
`

const Label = ({ id, children, hasError }) => {
  return (
    <LabelWrapper htmlFor={id} hasError={hasError}>{children}</LabelWrapper>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
}

export default Label
