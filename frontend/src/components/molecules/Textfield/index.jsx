import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Div, Input, Text } from 'components'

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
`
const PlaceHolder = styled(Text)`
  position: absolute;
  padding-left: ${({ theme }) => theme.sizes.spacing[2]};
  top: 30px;
  transition: 0.2s ease all;
`
const Helper = styled(Text)``

const Textfield = ({
  id, className, type, placeholder, helper, fullWidth, required, reference, status,
}) => {
  return (
    <Wrapper id={id} className={className} fullWidth={fullWidth}>
      <Input id={id} fullWidth={fullWidth} type={type} required={required} ref={reference} status={status}> </Input>
      <PlaceHolder>{placeholder}</PlaceHolder>
      {helper && <Helper color={{ error: 'red', success: 'green' }[status]}>{helper}</Helper>}
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
}

export default Textfield
