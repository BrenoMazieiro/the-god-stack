import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input, Label, Div } from 'components'
import { useMyContext } from 'hooks'

const LabeledInputWrapper = styled(Div)`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text[0]};

  @media only screen and (max-width: ${({ theme }) => theme.sizes.pagesBreakpoints.sm}) {
    flex-direction: column;
  }
`

const LabeledInput = forwardRef(({
  type, id, label,
}, ref) => {
  const { theme } = useMyContext()
  return (
    <LabeledInputWrapper theme={theme}>
      <Label id={id}>{label}</Label>
      <Input id={id} type={type} ref={ref} />
    </LabeledInputWrapper>
  )
})

LabeledInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
}

export { LabeledInput }
