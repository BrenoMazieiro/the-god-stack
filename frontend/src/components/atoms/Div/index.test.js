import React from 'react'
import { shallow } from 'enzyme'
import { Div } from '.'

const wrap = ({ id, children }) => shallow(<Div id={id}>{children}</Div>)

it('will render a Div component', () => {
  const wrapper = wrap({ children: 'Teste' })
  expect(wrapper.contains('Teste')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
