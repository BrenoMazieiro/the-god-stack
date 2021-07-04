import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputWrapper = styled.input`
  padding: 24px 24px 8px 24px; 

  color: ${
  ({ theme, status }) => (
    {
      none: theme.colors[theme.input.textcolor.color][theme.input.textcolor.intensity],
      error: theme.colors[theme.input.bordercolors.error.color][theme.input.bordercolors.error.intensity],
      success: theme.colors[theme.input.bordercolors.success.color][theme.input.bordercolors.success.intensity],
    }[status] || theme.colors[theme.input.textcolor.color][theme.input.textcolor.intensity]
  )
};
  font-weight: bold;
  font-size: 14px;
  line-height: 112%;

  width: ${({ fullWidht }) => fullWidht ? '100%' : '344px'};
  height: 56px;
  
  background: ${({ theme }) => theme.colors[theme.background[0].color][theme.background[0].intensity]};
  border: 1px solid ${
  ({ theme, status }) => (
    {
      none: theme.colors[theme.input.bordercolors.primary.color][theme.input.bordercolors.primary.intensity],
      error: theme.colors[theme.input.bordercolors.error.color][theme.input.bordercolors.error.intensity],
      success: theme.colors[theme.input.bordercolors.success.color][theme.input.bordercolors.success.intensity],
    }[status]
  )
};
  box-sizing: border-box;
  border-radius: 18px;
  margin: 8px 0px;

  :hover {
    border: 1px solid ${({ theme }) => theme.colors[theme.input.bordercolors.hover.color][theme.input.bordercolors.hover.intensity]};
  }
  :focus {
    outline: none;
    border-radius: 18px;
    border: 2px solid ${({ theme }) => theme.colors[theme.input.bordercolors.focus.color][theme.input.bordercolors.focus.intensity]};
  }
`

const Input = forwardRef(({
  id, type, status, fullWidht,
}, ref) => {
  return <InputWrapper id={id} type={type} ref={ref} status={status} fullWidht={fullWidht} />
})

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  fullWidht: PropTypes.bool,
  status: PropTypes.oneOf(['none', 'error', 'success']).isRequired,
}

export default Input
