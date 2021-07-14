import React from 'react'
import PropTypes from 'prop-types'
import {
  FaPowerOff, FaAnchor, FaArrowAltCircleRight, FaRegUserCircle, FaRegEnvelope, FaRegIdCard, FaLock, FaExclamationTriangle,
} from 'react-icons/fa'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Icon = ({
  iconname, className, color,
}) => {
  return (
    {
      anchor: <FaAnchor id="icon" className={className} color={color} />,
      arrowAltCircleRight: <FaArrowAltCircleRight id="icon" className={className} color={color} />,
      arrowRight: <IoIosArrowRoundForward id="icon" className={className} color={color} />,
      id: <FaRegIdCard id="icon" className={className} color={color} />,
      lock: <FaLock id="icon" className={className} color={color} />,
      mail: <FaRegEnvelope id="icon" className={className} color={color} />,
      power: <FaPowerOff id="icon" className={className} color={color} />,
      userCircle: <FaRegUserCircle id="icon" className={className} color={color} />,
      warning: <FaExclamationTriangle id="icon" className={className} color={color} />,
    }[iconname] || <div />
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  iconname: PropTypes.oneOf(['power', 'anchor', 'arrowAltCircleRight', 'userCircle', 'mail', 'id', 'lock', 'warning', 'arrowRight']),
  color: PropTypes.string,
}

export default Icon
