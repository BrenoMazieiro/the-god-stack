import React from 'react'
import { shallow } from 'enzyme'
import SignUpForm from '.'

const wrap = ({
  handleSubmit, username, password, errorMessages, name, email, confirmPassword,
}) => shallow(
  <SignUpForm
    handleSubmit={handleSubmit}
    username={username}
    password={password}
    errorMessages={errorMessages}
    name={name}
    email={email}
    confirmPassword={confirmPassword}
  />,
)

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ theme: {} }),
  }
})

describe('SignUpForm', () => {
  it('will render SignUpForm component', () => {
    const wrapper = wrap({
      handleSubmit: () => true,
      name: 'name',
      email: 'email@test.com',
      username: 'username',
      password: 'password',
      confirmPassword: 'password',
      errorMessages: [],
    })
    expect(wrapper.find({ id: 'SignUpForm' })).toHaveLength(1)
  })

  it('will render SignUpForm component with error', () => {
    const wrapper = wrap({
      handleSubmit: () => true,
      name: '',
      email: 'email@test.com',
      username: 'username',
      password: 'password',
      confirmPassword: 'password',
      errorMessages: [{ path: 'name', message: 'errorMessage' }],
    })
    wrapper.update()
    expect(
      wrapper
        .find({ id: 'SignUpForm' })
        .dive()
        .find({ id: 'name' })
        .dive()
        .find({ id: 'name-error' }),
    ).toHaveLength(1)
  })

  it('will render SignUpForm component without error', () => {
    const wrapper = wrap({
      handleSubmit: () => true,
      name: 'name',
      email: 'email@test.com',
      username: 'username',
      password: 'password',
      confirmPassword: 'password',
      errorMessages: [],
    })
    expect(wrapper.find({ id: 'name-error' })).toHaveLength(0)
  })
})
