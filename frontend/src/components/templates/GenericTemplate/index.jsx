import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Div } from 'components'

const Wrapper = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors[theme.background.primary.color][theme.background.primary.intensity]};
`

const GenericTemplate = ({ children }) => {
  return (
    <Wrapper id="GenericTemplate">
      {children}
    </Wrapper>
  )
}

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default GenericTemplate
