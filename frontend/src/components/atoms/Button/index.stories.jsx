import React from 'react'

import Button from '.'

export default {
  title: 'atoms/Button',
  component: Button,

}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />

export const SmallButton = Template.bind({})
SmallButton.args = {
  type: 'submit',
  size: 'sm',
  children: 'Small',
  onClick: () => null,
}

export const MediumButton = Template.bind({})
MediumButton.args = {
  type: 'submit',
  size: 'md',
  children: 'Medium',
  onClick: () => null,
}

export const LargeButton = Template.bind({})
LargeButton.args = {
  type: 'submit',
  size: 'lg',
  children: 'Large',
  onClick: () => null,
}
