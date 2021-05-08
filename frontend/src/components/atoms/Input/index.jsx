import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useMyContext } from 'hooks'

const InputWrapper = styled.input`
  margin: 5px;
  padding: 10px;
  border-color: ${({ theme, hasError }) => { return hasError ? theme.colors.actions.error : null }};
`

const Input = forwardRef(({ id, type, hasError }, ref) => {
  const { theme } = useMyContext()
  return <InputWrapper theme={theme} id={id} type={type} ref={ref} hasError={hasError} />
})

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
}

export default Input
