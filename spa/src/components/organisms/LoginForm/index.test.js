import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from '.'

const handleSubmit = jest.fn()
const submitting = false
const setEmail = jest.fn()
const setPassword = jest.fn()
const setIsValid = false
const isValid = false
const client = {}
const errorMessage = null

const wrap = (props = {}) => shallow(
  <LoginForm
    {...props}
    handleSubmit={handleSubmit}
    submitting={submitting}
    setEmail={setEmail}
    setPassword={setPassword}
    setIsValid={setIsValid}
    isValid={isValid}
    client={client}
    errorMessage={errorMessage}
  />,
)

it('calls renderSubmit when submitted', () => {
  handleSubmit.mockClear()
  const wrapper = wrap()
  expect(handleSubmit).not.toBeCalled()
  wrapper.simulate('submit')
  expect(handleSubmit).toBeCalled()
})

it('disables button while submitting', () => {
  const wrapper = wrap()
  expect(wrapper.find({ disabled: true }).length).toBe(1)
  wrapper.setProps({ submitting: true })
  expect(wrapper.find({ disabled: true })).toHaveLength(1)
})
