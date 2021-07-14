import React from 'react'
import { shallow } from 'enzyme'
import CheckBox from '.'

const wrap = ({
  id,
  className,
  color,
  error,
  size,
  reference,
  onClick,
  checked,
  readOnly,
}) => shallow(
  <CheckBox
    id={id}
    className={className}
    color={color}
    error={error}
    size={size}
    reference={reference}
    onClick={onClick}
    checked={checked}
    readOnly={readOnly}
  />,
)

describe('CheckBox', () => {
  it('will render a CheckBox component', () => {
    const wrapper = wrap(
      {
        id: 'id',
        color: 'white',
        size: 'sm',
        reference: () => true,
        onClick: () => true,
        checked: true,
        readOnly: true,
      },
    )
    expect(wrapper.find({ size: 'sm' })).to
  })
})
