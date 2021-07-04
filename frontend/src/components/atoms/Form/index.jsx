import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FormWrapper = styled.form`
  display:flex;
  flex-direction: column;
`

const Form = ({ handleSubmit, children, className }) => {
  return (
    <FormWrapper onSubmit={handleSubmit} className={className}>
      {children}
    </FormWrapper>
  )
}

Form.propTypes = {
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
}

export default Form
