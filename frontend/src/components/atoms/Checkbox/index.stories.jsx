import React from 'react'

import Checkbox from '.'

export default {
  title: 'components/atoms/Checkbox',
  component: Checkbox,
}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Checkbox {...args} />

export const SmallCheckbox = Template.bind({})
SmallCheckbox.args = {
  id: 'checkbox',
  error: false,
  color: 'orange',
  size: 'sm',
}
