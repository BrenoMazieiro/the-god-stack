import React from 'react'

import Input from '.'

export default {
  title: 'components/atoms/Input',
  component: Input,
}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Input {...args} />

export const SmallInput = Template.bind({})
SmallInput.args = {
  id: 'name',
  placeholder: 'name',
  type: 'text',
  status: 'noni',
}
