import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LabelWrapper = styled.label``

const Label = ({
  id, children, className, hasError,
}) => {
  return (
    <LabelWrapper className={className} htmlFor={id} hasError={hasError}>{children}</LabelWrapper>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  className: PropTypes.string,
}

export default Label
