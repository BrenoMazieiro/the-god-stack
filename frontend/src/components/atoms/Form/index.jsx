import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FormWrapper = styled.form`
  display:flex;
  flex-direction: column;
`

const Form = ({
  id, children, className, handleSubmit, dataTestid,
}) => {
  return (
    <FormWrapper id={id} onSubmit={handleSubmit} className={className} data-testid={dataTestid}>
      {children}
    </FormWrapper>
  )
}

Form.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  dataTestid: PropTypes.string,
}

export default Form
