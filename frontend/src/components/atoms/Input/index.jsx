import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputWrapper = styled.input`
  margin: 5px;
  padding: 10px;
`

const Input = forwardRef(({ id, type, hasError }, ref) => {
  return <InputWrapper id={id} type={type} ref={ref} hasError={hasError} />
})

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
}

export default Input
