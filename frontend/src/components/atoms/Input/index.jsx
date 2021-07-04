import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const getColor = ({ theme, status }) => (
  {
    error: theme.colors[theme.input.bordercolors.error.color][theme.input.bordercolors.error.intensity],
    success: theme.colors[theme.input.bordercolors.success.color][theme.input.bordercolors.success.intensity],
  }[status]
)

const InputWrapper = styled.input`
  padding: 24px 24px 8px 24px; 

  color: ${(props) => (
    getColor(props) || props.theme.colors[props.theme.input.textcolor.color][props.theme.input.textcolor.intensity]
  )};
  font-weight: bold;
  font-size: 14px;
  line-height: 112%;

  width: ${({ fullWidht }) => fullWidht ? '100%' : '344px'};
  height: 56px;
  
  background: ${({ theme }) => theme.colors[theme.input.background.color][theme.input.background.intensity]};
  border: 1px solid ${(props) => (
    getColor(props)
    || props.theme.colors[props.theme.input.bordercolors.primary.color][props.theme.input.bordercolors.primary.intensity]
  )};
  
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

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
  }
  -webkit-text-fill-color: ${(props) => (
    getColor(props) || props.theme.colors[props.theme.input.textcolor.color][props.theme.input.textcolor.intensity]
  )} !important;
`

const Input = forwardRef(({
  id, className, type, status, fullWidht,
}, ref) => {
  return <InputWrapper className={className} id={id} type={type} ref={ref} status={status} fullWidht={fullWidht} />
})

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  fullWidht: PropTypes.bool,
  status: PropTypes.oneOf(['error', 'success']),
}

export default Input
