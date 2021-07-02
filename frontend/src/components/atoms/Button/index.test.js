import React from 'react'
import { shallow } from 'enzyme'
import Button from '.'

const wrap = ({ type, size, children }) => shallow(<Button type={type} size={size}>{children}</Button>)

describe('Button', () => {
  it('will render a Button component', () => {
    const wrapper = wrap({ children: 'Teste', type: 'submit', size: 'lg' })
    expect(wrapper.contains('Teste')).toBe(true)
  })

  it('will render a large Button component when no size is sent', () => {
    const wrapper = wrap({ children: 'Teste', type: 'submit' })
    expect(wrapper.find({ size: 'lg' })).toHaveLength(1)
  })
})
