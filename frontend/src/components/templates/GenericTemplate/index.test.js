import React from 'react'
import { shallow } from 'enzyme'
import GenericTemplate from '.'

const wrap = ({ children }) => shallow(
  <GenericTemplate>{children}</GenericTemplate>,
)

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ theme: {} }),
  }
})

describe('GenericTemplate', () => {
  it('will render GenericTemplate component', () => {
    const wrapper = wrap({ children: 'Text' })
    expect(wrapper.find({ id: 'GenericTemplate' })).toHaveLength(1)
  })
})
