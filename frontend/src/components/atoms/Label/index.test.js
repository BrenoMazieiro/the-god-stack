import React from 'react'
import { shallow } from 'enzyme'
import Label from '.'

const wrap = ({ id, children }) => shallow(<Label id={id}>{children}</Label>)

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ theme: {} }),
  }
})

describe('Label', () => {
  it('will render a Label component', () => {
    const wrapper = wrap({ children: 'Teste', id: 'LabelId' })
    expect(wrapper.contains('Teste')).toBe(true)
  })

  it('will render an htmlFor id for Label component', () => {
    const wrapper = wrap({ children: 'Teste', id: 'LabelId' })
    expect(wrapper.find({ htmlFor: 'LabelId' })).toHaveLength(1)
  })
})
