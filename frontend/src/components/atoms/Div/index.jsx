import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DivWrapper = styled.div`
`

const Div = ({
  children, className, id, dangerouslySetInnerHTML, onMouseUp,
}) => {
  return (
    <DivWrapper
      className={className}
      id={id}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      onMouseUp={onMouseUp}
    >
      {children}
    </DivWrapper>
  )
}

Div.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.any,
  dangerouslySetInnerHTML: PropTypes.object,
  onMouseUp: PropTypes.func,
}

export default Div
