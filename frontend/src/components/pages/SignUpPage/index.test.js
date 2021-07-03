import React from 'react'
import { shallow } from 'enzyme'
import SignUpPage from '.'

const wrap = () => shallow(
  <SignUpPage />,
)

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ }),
  }
})

jest.mock('@apollo/client', () => {
  const originalModule = jest.requireActual('@apollo/client')
  return {
    ...originalModule,
    useMutation: () => ([() => true]),
  }
})

describe('SignUpPage', () => {
  it('will render SignUpPage component', () => {
    const wrapper = wrap()
    expect(wrapper.find({ id: 'SignUpPage' })).toHaveLength(1)
  })
})
