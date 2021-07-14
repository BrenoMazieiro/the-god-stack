import React from 'react'

import SignUpForm from './index'

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
  const name = () => true
  const email = () => true
  const username = () => true
  const password = () => true
  const confirmPassword = () => true
  return (
    <SignUpForm
      name={name}
      email={email}
      username={username}
      password={password}
      confirmPassword={confirmPassword}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...args}
    />
  )
}

export const FormSignUp = Template.bind({})
FormSignUp.args = {
  handleSubmit: () => true,
  errorMessages: [
    { path: 'name', message: 'There is an error on name' },
    { path: 'name', message: 'There is another error on name' },
    { path: 'confirmPassword', message: 'Passwords do not match!' },
  ],
  serverErrorCode: '',
}
