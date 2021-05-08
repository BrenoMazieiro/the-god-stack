import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Input, Label, Div, Tooltip,
} from 'components'
import { useMyContext } from 'hooks'

const LabeledInputWrapper = styled(Div)`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text[0]};

  @media only screen and (max-width: ${({ theme }) => theme.sizes.pagesBreakpoints.sm}) {
    flex-direction: column;
  }
`

const InputIcon = styled(Div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const LabeledInput = forwardRef(({
  type, id, label, errorMessages,
}, ref) => {
  const { theme } = useMyContext()
  const getErrors = (field, errors) => {
    return `${errors.reduce((acc, error) => error.path === field ? `${acc} - ${error.message} <br/>` : acc, '')}`
  }

  const hasErrors = (field, errors) => {
    return errors.find((error) => error.path === field)
  }

  const thisFieldHasErrors = !!errorMessages.length && !!hasErrors(id, errorMessages)

  return (
    <LabeledInputWrapper theme={theme} id={`${id}${thisFieldHasErrors ? '-error' : ''}`}>
      <Label id={id} hasError={thisFieldHasErrors}>{label}</Label>
      <InputIcon>
        <Input id={id} type={type} ref={ref} hasError={thisFieldHasErrors} />
        {
            !!errorMessages.length
            && !!hasErrors(id, errorMessages)
            && <Tooltip type="error" errorMessage={getErrors(id, errorMessages)} />
          }
      </InputIcon>
    </LabeledInputWrapper>
  )
})

LabeledInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMessages: PropTypes.array,
}

export default LabeledInput
