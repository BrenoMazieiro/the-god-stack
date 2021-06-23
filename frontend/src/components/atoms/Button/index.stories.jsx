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
  children: <div>Test</div>,
  onClick: () => console.log('clicked'),
}

export const MediumButton = Template.bind({})
MediumButton.args = {
  type: 'submit',
  size: 'md',
  children: <div>Test</div>,
  onClick: () => console.log('clicked'),
}

export const LargeButton = Template.bind({})
LargeButton.args = {
  type: 'submit',
  size: 'lg',
  children: <div>Test</div>,
  onClick: () => console.log('clicked'),
}
