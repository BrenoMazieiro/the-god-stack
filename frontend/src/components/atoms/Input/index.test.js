import React from 'react'
import { shallow } from 'enzyme'
import Input from '.'

const wrap = ({ type }) => shallow(<Input type={type} />)

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ theme: {} }),
  }
})

describe('Input', () => {
  it('will render a Input component', () => {
    const wrapper = wrap({ type: 'text' })
    expect(wrapper.find({ type: 'text' })).toHaveLength(1)
  })
})
