import React from 'react'
import { shallow } from 'enzyme'
import Text from '.'

const wrap = ({ children, id }) => shallow(<Text id={id}>{children}</Text>)

describe('Text', () => {
  it('will render a large Text component when no size is sent', () => {
    const wrapper = wrap({ children: 'Teste', id: 'mytext' })
    expect(wrapper.find({ id: 'mytext' })).toHaveLength(1)
  })
})
