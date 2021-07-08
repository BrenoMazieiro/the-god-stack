import React from 'react'
import PropTypes from 'prop-types'
import {
  FaPowerOff, FaAnchor, FaArrowAltCircleRight, FaRegUserCircle, FaRegEnvelope, FaRegIdCard, FaLock, FaExclamationTriangle,
} from 'react-icons/fa'
import styled, { css } from 'styled-components'

const genericDesing = css`
  stroke-width: 1;
  width: ${({ theme, iconsize }) => theme.sizes.icon[iconsize]};
  height: ${({ theme, iconsize }) => theme.sizes.icon[iconsize]};
`

const StyledFaPowerOff = styled(FaPowerOff)`${genericDesing}`
const StyledFaAnchor = styled(FaAnchor)`${genericDesing}`
const StyledFaArrowAltCircleRight = styled(FaArrowAltCircleRight)`${genericDesing}`
const StyledFaRegUserCircle = styled(FaRegUserCircle)`${genericDesing}`
const StyledFaRegEnvelope = styled(FaRegEnvelope)`${genericDesing}`
const StyledFaRegIdCard = styled(FaRegIdCard)`${genericDesing}`
const StyledFaLock = styled(FaLock)`${genericDesing}`
const StyledFaExclamationTriangle = styled(FaExclamationTriangle)`${genericDesing}`

const Icon = ({
  iconname, iconsize, className,
}) => {
  return (
    {
      power: <StyledFaPowerOff id="icon" className={className} iconsize={iconsize} />,
      anchor: <StyledFaAnchor id="icon" className={className} iconsize={iconsize} />,
      arrowAltCircleRight: <StyledFaArrowAltCircleRight id="icon" className={className} iconsize={iconsize} />,
      userCircle: <StyledFaRegUserCircle id="icon" className={className} iconsize={iconsize} />,
      mail: <StyledFaRegEnvelope id="icon" className={className} iconsize={iconsize} />,
      id: <StyledFaRegIdCard id="icon" className={className} iconsize={iconsize} />,
      lock: <StyledFaLock id="icon" className={className} iconsize={iconsize} />,
      warning: <StyledFaExclamationTriangle id="icon" className={className} iconsize={iconsize} />,
    }[iconname] || <div />
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  iconname: PropTypes.oneOf(['power', 'anchor', 'arrowAltCircleRight', 'userCircle', 'mail', 'id', 'lock', 'warning']),
  iconsize: PropTypes.oneOf(['xsm', 'sm', 'md', 'lg', 'xlg']),
  // type: PropTypes.oneOf(['stroke', 'fill', 'doutone']),
}

export default Icon
