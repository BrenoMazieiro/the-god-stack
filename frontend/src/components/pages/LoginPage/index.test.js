import React from 'react'
import { shallow } from 'enzyme'
import LoginPage from '.'

const wrap = () => shallow(
  <LoginPage />,
)

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ theme: {} }),
  }
})

jest.mock('@apollo/client', () => {
  const originalModule = jest.requireActual('@apollo/client')
  return {
    ...originalModule,
    useMutation: () => ([() => true]),
  }
})

describe('LoginPage', () => {
  it('will render LoginPage component', () => {
    const wrapper = wrap()
    expect(wrapper.find({ id: 'LoginPage' })).toHaveLength(1)
  })
})
