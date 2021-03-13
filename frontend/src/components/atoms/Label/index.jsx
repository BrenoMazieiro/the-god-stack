import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useMyContext } from 'hooks'

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

const Label = ({ id, children }) => {
  const { theme } = useMyContext()
  return (
    <LabelWrapper htmlFor={id} theme={theme}>{children}</LabelWrapper>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}

export { Label }
