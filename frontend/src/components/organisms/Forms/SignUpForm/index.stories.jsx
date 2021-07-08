import React, { useRef } from 'react'

import SignUpForm from '.'

export default {
  title: 'components/organisms/SignUpForm',
  component: SignUpForm,
  decorators: [
    (Story) => (
      <Story />
    ),
  ],
}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => {
  const name = useRef()
  const email = useRef()
  const username = useRef()
  const password = useRef()
  const confirmPassword = useRef()
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <SignUpForm name={name} email={email} username={username} password={password} confirmPassword={confirmPassword} {...args} />
}

export const Form = Template.bind({})
Form.args = {
  handleSubmit: () => true,
  errorMessages: [
    { path: 'name', message: 'There is an error on name' },
    { path: 'name', message: 'There is another error on name' },
    { path: 'confirmPassword', message: 'Passwords do not match!' },
  ],
  serverErrorCode: '',
}
