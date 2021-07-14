import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.input.attrs({ type: 'checkbox' })`
  width: ${({ theme, size }) => theme.sizes.spacing[{ sm: 2, md: 3, lg: 4 }[size]]};
  height: ${({ theme, size }) => theme.sizes.spacing[{ sm: 2, md: 3, lg: 4 }[size]]};
  cursor: pointer;
`

const Checkbox = ({
  id, className, color, error, size = 'sm', reference, onClick, checked, readOnly,
}) => {
  return (
    <Wrapper
      id={id}
      className={className}
      reference={reference}
      color={color}
      error={error}
      size={size}
      onClick={onClick}
      checked={checked}
      readOnly={readOnly}
    />
  )
}

Checkbox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(['white', 'black', 'gray', 'blue', 'pink', 'green', 'yellow', 'orange', 'red', 'purple']),
  error: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  readOnly: PropTypes.bool,
}

export default Checkbox
