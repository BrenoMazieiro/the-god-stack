import React from 'react'
import PropTypes from 'prop-types'
import { FaPowerOff, FaAnchor, FaArrowAltCircleRight } from 'react-icons/fa'
import styled, { css } from 'styled-components'

const genericDesing = css`
  stroke-width: 1;
  width: ${({ theme, iconsize }) => theme.sizes.icon[iconsize]};
  height: ${({ theme, iconsize }) => theme.sizes.icon[iconsize]};
`

const StyledFaPowerOff = styled(FaPowerOff)`${genericDesing}`
const StyledFaAnchor = styled(FaAnchor)`${genericDesing}`
const StyledFaArrowAltCircleRight = styled(FaArrowAltCircleRight)`${genericDesing}`

const Icon = ({
  iconname, iconsize, className,
}) => {
  return (
    {
      power: <StyledFaPowerOff id="icon" className={className} iconsize={iconsize} />,
      anchor: <StyledFaAnchor id="icon" className={className} iconsize={iconsize} />,
      arrowAltCircleRight: <StyledFaArrowAltCircleRight id="icon" className={className} iconsize={iconsize} />,
    }[iconname] || <div />
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  iconname: PropTypes.oneOf(['power', 'anchor', 'arrowAltCircleRight']),
  iconsize: PropTypes.oneOf(['xsm', 'sm', 'md', 'lg', 'xlg']),
  // type: PropTypes.oneOf(['stroke', 'fill', 'doutone']),
}

export default Icon
