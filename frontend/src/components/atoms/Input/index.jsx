import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputWrapper = styled.input`
  margin: 5px;
  padding: 10px;
`

const Input = forwardRef(({ type }, ref) => {
  return <InputWrapper type={type} ref={ref} />
})

Input.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Input
