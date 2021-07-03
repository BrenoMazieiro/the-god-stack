import React from 'react'
import { shallow } from 'enzyme'
import A from '.'

const wrap = ({ id, children }) => shallow(<A id={id}>{children}</A>)

describe('Link', () => {
  it('will render a Link component', () => {
    const wrapper = wrap({ children: 'Teste' })
    expect(wrapper.contains('Teste')).toBe(true)
  })

  it('will render a id when given', () => {
    const wrapper = wrap({ children: 'Teste', id: 'link' })
    expect(wrapper.find({ id: 'link' })).toHaveLength(1)
  })
})
