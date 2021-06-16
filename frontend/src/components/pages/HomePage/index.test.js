import React from 'react'
import { shallow } from 'enzyme'
import HomePage from '.'

const wrap = () => shallow(
  <HomePage />,
)

jest.mock('hooks', () => {
  return {
    useMyContext: () => (
      {
        theme: {},
        history: { location: { state: { type: 'validateUser' } } },
      }),
  }
})

describe('HomePage', () => {
  it('will render HomePage component', () => {
    const wrapper = wrap()
    expect(wrapper.find({ id: 'homepage' })).toHaveLength(1)
  })
  it('will render HomePage component with validated user', () => {
    const wrapper = wrap()
    expect(
      wrapper.find({ id: 'homepage' })
        .dive()
        .find({ id: 'homepageContent' })
        .dive()
        .find({ id: 'validateUser' }),
    ).toHaveLength(1)
  })
})
