import React from 'react'
import { shallow } from 'enzyme'
import IconButton from '.'

const wrap = ({
  children, type, size, iconname, iconsize, iconposition, onClick, bgColor, color, disabled, fullWidth,
}) => shallow(
  <IconButton
    type={type}
    size={size}
    iconname={iconname}
    iconsize={iconsize}
    iconposition={iconposition}
    onClick={onClick}
    bgColor={bgColor}
    color={color}
    disabled={disabled}
    fullWidth={fullWidth}
  >
    {children}
  </IconButton>,
)

describe('IconButton', () => {
  it('will render a IconButton component', () => {
    const wrapper = wrap({
      type: 'submit',
      size: 'lg',
      children: 'Large',
      bgColor: 'green',
      color: 'yellow',
      onClick: () => null,
      iconname: 'power',
      iconsize: 'xsm',
      iconposition: 'right',
    })
    expect(wrapper.contains('Large')).toBe(true)
  })

  it('will render a large IconButton component when no size is sent', () => {
    const wrapper = wrap({
      type: 'submit',
      size: 'lg',
      children: 'Large',
      bgColor: 'green',
      color: 'yellow',
      onClick: () => null,
      iconname: 'power',
      iconsize: 'xsm',
      iconposition: 'right',
    })
    expect(wrapper.find({ size: 'lg' })).toHaveLength(1)
  })
})
