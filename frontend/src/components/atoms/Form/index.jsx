import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FormWrapper = styled.form`
  display:flex;
  flex-direction: column;
`

const Form = ({ handleSubmit, children }) => {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      {children}
    </FormWrapper>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
}

export default Form
