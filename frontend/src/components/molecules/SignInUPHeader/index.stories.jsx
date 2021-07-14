import React from 'react'

import SignInUPHeader from './index'

export default {
  title: 'components/molecules/SignInUPHeader',
  component: SignInUPHeader,
}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <SignInUPHeader {...args} />

export const SignInUPHeaderExample = Template.bind({})
SignInUPHeaderExample.args = {
  id: 'SignInUPHeader',
}
