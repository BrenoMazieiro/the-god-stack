import React from 'react'
import { shallow } from 'enzyme'
import ValidateUserPage from '.'

const wrap = () => shallow(
  <ValidateUserPage />,
)

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ theme: {}, history: {}, params: { token: 'token' } }),
  }
})

jest.mock('@apollo/client', () => {
  const originalModule = jest.requireActual('@apollo/client')
  return {
    ...originalModule,
    useMutation: (
      jest
        .fn()
        .mockReturnValueOnce([() => true, { loading: false, error: false }])
        .mockReturnValueOnce([() => true, { loading: true, error: false }])
        .mockReturnValueOnce([() => true, { loading: false, error: true }])
    ),
  }
})

describe('ValidateUserPage', () => {
  it('will render ValidateUserPage component', () => {
    const wrapper = wrap()
    expect(wrapper.find({ id: 'ValidateUserPage' })).toHaveLength(1)
  })

  it('will render ValidateUserPage component with loading', () => {
    const wrapper = wrap()
    expect(wrapper.find({ id: 'ValidateUserPageLoading' })).toHaveLength(1)
  })

  it('will render ValidateUserPage component with error', () => {
    const wrapper = wrap()
    expect(wrapper.find({ id: 'ValidateUserPageError' })).toHaveLength(1)
  })
})
