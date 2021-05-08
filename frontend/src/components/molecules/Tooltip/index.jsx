import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useMyContext } from 'hooks'
import { MdError } from 'react-icons/md'
import { Div } from 'components'

const WrapperTooltip = styled(Div)`
  position: relative;
  display: inline-block;
  //border-bottom: 1px dotted black;
  &:hover #tooltiptext {
    visibility: visible;
  }

`
const StyledTooltipText = styled.span`
  padding: 10px;
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  width: 250px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: -5px;
  right: 105%;
`

const ErrorIcon = styled(MdError)`
  color: ${({ theme }) => theme.colors.actions.error};
`
const Tooltip = ({ type, errorMessage }) => {
  const { theme } = useMyContext()
  return (
    <WrapperTooltip theme={theme} type={type}>
      <ErrorIcon theme={theme} size={20} />
      <StyledTooltipText id="tooltiptext">
        <Div theme={theme} dangerouslySetInnerHTML={{ __html: errorMessage }} />
      </StyledTooltipText>
    </WrapperTooltip>
  )
}

Tooltip.propTypes = {
  type: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
}

export default Tooltip
