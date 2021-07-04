import React from 'react'
import { shallow } from 'enzyme'
import Textfield from '.'

const wrap = ({
  children, id, type, placeholder,
}) => {
  // const reference = useRef()
  return shallow(<Textfield id={id} reference={(element) => { this.input = element }} type={type} placeholder={placeholder}>{children}</Textfield>)
}

describe('Textfield', () => {
  it('will render a large Textfield component when no size is sent', () => {
    const wrapper = wrap({
      children: 'Teste', id: 'mytext', type: 'text', placeholder: 'Placeholder',
    })
    expect(wrapper.find({ id: 'mytext' })).toHaveLength(1)
  })
})
