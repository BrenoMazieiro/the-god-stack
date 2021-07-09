import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Div, Input, Span, Icon,
} from 'components'

const Wrapper = styled(Div)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => fullWidth ? '100%' : '344px'};
  input:focus + span {
    top: 16px;
  }
  input:not(:placeholder-shown):valid + span {
    top: 16px;
  }
  margin-bottom: ${({ theme }) => theme.sizes.spacing[1]};
`
const PlaceHolder = styled(Span)`
  color: ${({ theme }) => theme.colors[theme.input.placeholder.color][theme.input.placeholder.intensity]};
  position: absolute;
  padding-left: ${({ theme }) => theme.sizes.spacing[3]};
  top: ${({ theme }) => `calc(${theme.sizes.spacing[3]} + 3px)`};
  ${({ theme, hasLeftIcon }) => hasLeftIcon && `left: ${theme.sizes.spacing[3]};`}
  transition: 0.2s ease all;
`
const StyledInput = styled(Input)`
  padding: 24px ${({ hasRightIcon }) => hasRightIcon ? '48px' : '24px'} 8px ${({ hasLeftIcon }) => hasLeftIcon ? '48px' : '24px'};
  :focus {
    ${({ theme, hasLeftIcon }) => hasLeftIcon && `padding-left: calc(${theme.sizes.spacing[6]} - 1px)`};
  }
`
const StyledLeftIcon = styled(Icon)`
  background-color: 'red';
  position: absolute;
  top: ${({ theme }) => `calc(${theme.sizes.spacing[3]} + 5px)`};
  left: ${({ theme }) => `calc(${theme.sizes.spacing[2]} - 1px)`};
`

const StyledRightIcon = styled(Icon)`
  background-color: 'red';
  position: absolute;
  top: ${({ theme }) => `calc(${theme.sizes.spacing[3]} + 5px)`};
  right: ${({ theme }) => `calc(${theme.sizes.spacing[2]} - 1px)`};
`

const Textfield = ({
  id,
  className,
  type,
  placeholder,
  helper,
  fullWidth,
  required,
  reference,
  status,
  leftIconName,
  maxLength,
  rightIconName,
  onRightIconClick,
}) => {
  const hasLeftIcon = !!leftIconName
  const hasRightIcon = !!rightIconName
  const statusColor = { error: 'red', success: 'green' }[status]
  return (
    <Wrapper id={`textfieldwrapper-${id}`} className={className} fullWidth={fullWidth}>
      <StyledInput
        id={id}
        fullWidth={fullWidth}
        type={type}
        required={required}
        ref={reference}
        status={status}
        hasLeftIcon={hasLeftIcon}
        hasRightIcon={hasRightIcon}
        maxLength={maxLength}
      />
      <PlaceHolder hasLeftIcon={hasLeftIcon}>{placeholder}</PlaceHolder>
      {leftIconName && <Span color={statusColor} error={status === 'error'}><StyledLeftIcon iconname={leftIconName} iconsize="xsm" /></Span>}
      {helper && <Span id={`${id}-helper`} color={statusColor} error={status === 'error'}><Div dangerouslySetInnerHTML={{ __html: helper }} /></Span>}
      {rightIconName && <Span color={statusColor} error={status === 'error'} onClick={onRightIconClick}><StyledRightIcon iconname={rightIconName} iconsize="xsm" /></Span>}
    </Wrapper>
  )
}

Textfield.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  helper: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']).isRequired,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  status: PropTypes.oneOf(['error', 'success']),
  leftIconName: Icon.propTypes.iconname,
  rightIconName: Icon.propTypes.iconname,
  onRightIconClick: PropTypes.func,
  maxLength: PropTypes.number,
}

export default Textfield
