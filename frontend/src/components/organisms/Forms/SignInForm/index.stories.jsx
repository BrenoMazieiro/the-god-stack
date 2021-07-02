import React, { useRef } from 'react'

import SignInForm from '.'

export default {
  title: 'Organisms/SignInForm',
  component: SignInForm,
  decorators: [
    (Story) => (
      <Story />
    ),
  ],
}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => {
  const username = useRef()
  const password = useRef()
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <SignInForm username={username} password={password} {...args} />
}

export const Form = Template.bind({})
Form.args = {
  handleSubmit: () => console.log('submited'),
  errorMessage: null,
}

export const FormWithUserOrPasswordError = Template.bind({})
FormWithUserOrPasswordError.args = {
  handleSubmit: () => console.log('submited'),
  errorMessage: 'invalid_username_or_password',
}
