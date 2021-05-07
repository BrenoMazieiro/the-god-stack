import React from 'react'
import { shallow } from 'enzyme'
import SignUpForm from '.'

const wrap = ({
  handleSubmit, username, password, errorMessage, name, email, confirmPassword,
}) => shallow(
  <SignUpForm
    handleSubmit={handleSubmit}
    username={username}
    password={password}
    errorMessage={errorMessage}
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
      errorMessage: '',
    })
    expect(wrapper.find({ id: 'SignUpForm' })).toHaveLength(1)
  })

  it('will render SignUpForm component with error', () => {
    const wrapper = wrap({
      handleSubmit: () => true,
      name: 'name',
      email: 'email@test.com',
      username: 'username',
      password: 'password',
      confirmPassword: 'password',
      errorMessage: 'error',
    })
    expect(wrapper.find({ id: 'errorMessage' })).toHaveLength(1)
  })

  it('will render SignUpForm component without error', () => {
    const wrapper = wrap({
      handleSubmit: () => true,
      name: 'name',
      email: 'email@test.com',
      username: 'username',
      password: 'password',
      confirmPassword: 'password',
      errorMessage: '',
    })
    expect(wrapper.find({ id: 'errorMessage' })).toHaveLength(0)
  })
})
