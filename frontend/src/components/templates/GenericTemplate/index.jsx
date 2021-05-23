import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Div } from 'components'
import { useMyContext } from 'hooks'

const Wrapper = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background[0]};
`

const GenericTemplate = ({ children }) => {
  const { theme } = useMyContext()
  return (
    <Wrapper theme={theme} id="GenericTemplate">
      {children}
    </Wrapper>
  )
}

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default GenericTemplate
