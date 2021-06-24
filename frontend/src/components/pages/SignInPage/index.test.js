import React from 'react'
import { shallow } from 'enzyme'
import SignInPage from '.'

const wrap = () => shallow(
  <SignInPage />,
)

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ theme: {}, history: {} }),
  }
})

jest.mock('@apollo/client', () => {
  const originalModule = jest.requireActual('@apollo/client')
  return {
    ...originalModule,
    useMutation: () => ([() => true]),
  }
})

describe('SignInPage', () => {
  it('will render SignInPage component', () => {
    const wrapper = wrap()
    expect(wrapper.find({ id: 'SignInPage' })).toHaveLength(1)
  })
})
