import React from 'react'
import { shallow } from 'enzyme'
import Button from '.'

const wrap = ({ children, id }) => shallow(<Button id={id}>{children}</Button>)

describe('Button', () => {
  it('will render a large Button component when no size is sent', () => {
    const wrapper = wrap({ children: 'Teste', id: 'mytext' })
    expect(wrapper.find({ id: 'mytext' })).toHaveLength(1)
  })
})
