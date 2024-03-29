import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Div, Button, Icon } from 'components/atoms'

const Wrapper = styled(Div)`
  display: flex;
  flex-direction: ${({ iconposition }) => iconposition === 'left' ? 'row' : 'row-reverse'};
  align-items: center;
  justify-content: center;
`

const ChildrenWrapper = styled(Div)`
  padding-left: ${({ theme, iconposition }) => iconposition !== 'left' && theme.sizes.spacing[1]};
  padding-right: ${({ theme, iconposition }) => iconposition !== 'left' && theme.sizes.spacing[1]};
`

const StyledButton = styled(Button)`
  ${({ theme, hasChildren, size }) => !hasChildren && `padding: ${theme.sizes.button[size].justIconPadding};`}
`

const IconButton = ({
  id, children, className, iconname, iconsize, iconposition, type, size, onClick, bgColor, color, disabled, fullWidth,
}) => {
  return (
    <StyledButton
      id={id}
      className={className}
      type={type}
      size={size}
      onClick={onClick}
      color={color}
      bgColor={bgColor}
      disabled={disabled}
      fullWidth={fullWidth}
      hasChildren={!!children}
    >
      <Wrapper iconposition={iconposition} onMouseUp={(e) => e.currentTarget.parentElement.blur()}>
        <Icon iconname={iconname} iconsize={iconsize} />
        {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
      </Wrapper>
    </StyledButton>
  )
}

IconButton.propTypes = {
  iconposition: PropTypes.oneOf(['left', 'right']),
  ...Button.propTypes,
  ...Icon.propTypes,
}

export default IconButton
