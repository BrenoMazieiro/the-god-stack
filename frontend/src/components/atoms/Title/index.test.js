import React from 'react'
import { shallow } from 'enzyme'
import Title from '.'

const wrap = ({ type, size, children }) => shallow(<Title type={type} size={size}>{children}</Title>)

describe('Title', () => {
  it('will render a Title component', () => {
    const wrapper = wrap({ children: 'This is a title example', size: 2 })
    expect(wrapper.contains('This is a title example')).toBe(true)
  })
})
