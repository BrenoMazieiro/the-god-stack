import React from 'react'
import { shallow } from 'enzyme'
import HomePage from '.'

const wrap = () => shallow(
  <HomePage />,
)

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ theme: {} }),
  }
})

describe('HomePage', () => {
  it('will render HomePage component', () => {
    const wrapper = wrap()
    expect(wrapper.find({ id: 'homepage' })).toHaveLength(1)
  })
})
