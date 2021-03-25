import React from 'react'
import { shallow } from 'enzyme'
import LabeledInput from '.'

const wrap = ({ id, type, label }) => shallow(<LabeledInput id={id} type={type} label={label} />)

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ theme: {} }),
  }
})

describe('LabeledInput', () => {
  it('will render LabeledInput component and have two childrens', () => {
    const wrapper = wrap({ id: 'Test', type: 'text', label: 'label' })
    expect(wrapper.find({ id: 'Test' })).toHaveLength(2)
  })

  it('will render LabeledInput component with one input', () => {
    const wrapper = wrap({ id: 'Test', type: 'text', label: 'label' })
    expect(wrapper.find({ type: 'text' })).toHaveLength(1)
  })
})
