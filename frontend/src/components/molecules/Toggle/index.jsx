import React, { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Checkbox, Span, Label, Icon,
} from 'components/atoms'

const reactSvgComponentToMarkupString = (Component, props) => `data:image/svg+xml,${encodeURIComponent(
  renderToStaticMarkup(createElement(Component, props)),
)}`

const Wrapper = styled(Label)`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`
const StyledCheckBox = styled(Checkbox)`
  opacity: 0;
  width: 0;
  height: 0;
  :checked + #togglespan {
    background-color: #2196F3;
  }

  :focus + #togglespan {
    box-shadow: 0 0 1px #2196F3;
  }

  :checked + #togglespan:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`
const StyledSpan = styled(Span)`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  :before {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    ${
  ({ iconname, iconcolor }) => (
    iconname
      ? `content: url(${reactSvgComponentToMarkupString(Icon, { iconname, color: iconcolor })})`
      : 'content: ""'
  )
};
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`

const Toggle = ({
  id, className, onClick, reference, checked, iconname, iconcolor,
}) => {
  return (
    <Wrapper id="toggle">
      <StyledCheckBox id={id} className={className} onClick={onClick} reference={reference} checked={checked} readOnly />
      <StyledSpan id="togglespan" onClick={onClick} iconname={iconname} iconcolor={iconcolor} />
    </Wrapper>
  )
}

Toggle.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  checked: PropTypes.bool,
  iconname: PropTypes.string,
  iconcolor: PropTypes.string,
}

export default Toggle
