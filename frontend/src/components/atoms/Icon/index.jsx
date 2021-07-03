import React from 'react'
import PropTypes from 'prop-types'
import { FaPowerOff, FaAnchor } from 'react-icons/fa'
import styled, { css } from 'styled-components'

const genericDesing = css`
  stroke-width: 1;
  width: ${({ theme, iconsize }) => theme.sizes.icon[iconsize]};
  height: ${({ theme, iconsize }) => theme.sizes.icon[iconsize]};
`

const StyledFaPowerOff = styled(FaPowerOff)`${genericDesing}`
const StyledFaAnchor = styled(FaAnchor)`${genericDesing}`

const Div = ({
  iconname, iconsize,
}) => {
  return (
    {
      power: <StyledFaPowerOff id="icon" iconsize={iconsize} />,
      anchor: <StyledFaAnchor id="icon" iconsize={iconsize} />,
    }[iconname] || <div />
  )
}

Div.propTypes = {
  iconname: PropTypes.oneOf(['power', 'anchor']),
  iconsize: PropTypes.oneOf(['xsm', 'sm', 'md', 'lg', 'xlg']),
  // type: PropTypes.oneOf(['stroke', 'fill', 'doutone']),
}

export default Div
