import React from 'react'

import Button from '.'

export default {
  title: 'components/atoms/Button',
  component: Button,

}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />

export const SmallButton = Template.bind({})
SmallButton.args = {
  type: 'submit',
  size: 'sm',
  children: 'Small',
  bgColor: 'blue',
  color: 'white',
  onClick: () => null,
}

export const MediumButton = Template.bind({})
MediumButton.args = {
  type: 'submit',
  size: 'md',
  children: 'Medium',
  bgColor: 'blue',
  color: 'white',
  onClick: () => null,
}

export const LargeButton = Template.bind({})
LargeButton.args = {
  type: 'submit',
  size: 'lg',
  children: 'Large',
  bgColor: 'blue',
  color: 'white',
  onClick: () => null,
}
