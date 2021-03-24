import React from 'react'
import { shallow } from 'enzyme'
import Form from '.'

const wrap = ({ children, handleSubmit }) => shallow(<Form handleSubmit={handleSubmit}>{children}</Form>)

describe('Form', () => {
  it('will render a Form component', () => {
    const wrapper = wrap({ children: 'Teste', handleSubmit: () => {} })
    expect(wrapper.contains('Teste')).toBe(true)
  })
})
