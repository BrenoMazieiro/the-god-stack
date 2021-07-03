import React from 'react'
import IconButton from '.'

export default {
  title: 'components/molecules/IconButton',
  component: IconButton,

}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <IconButton {...args} />

export const SmallIconButton = Template.bind({})
SmallIconButton.args = {
  type: 'submit',
  size: 'sm',
  children: 'Small',
  bgColor: 'blue',
  color: 'white',
  onClick: () => null,
  iconname: 'power',
  iconsize: 'xsm',
  fullWidth: false,
  iconposition: 'left',
}

export const MediumIconButton = Template.bind({})
MediumIconButton.args = {
  type: 'submit',
  size: 'md',
  children: 'Medium',
  bgColor: 'yellow',
  color: 'black',
  onClick: () => null,
  iconname: 'power',
  iconsize: 'xsm',
  fullWidth: false,
  iconposition: 'left',
}

export const LargeIconButton = Template.bind({})
LargeIconButton.args = {
  type: 'submit',
  size: 'lg',
  children: 'Large',
  bgColor: 'green',
  color: 'yellow',
  onClick: () => null,
  iconname: 'power',
  iconsize: 'xsm',
  fullWidth: false,
  iconposition: 'left',
}

export const LargeIconButtonRigth = Template.bind({})
LargeIconButtonRigth.args = {
  type: 'submit',
  size: 'lg',
  children: 'Large',
  bgColor: 'green',
  color: 'yellow',
  onClick: () => null,
  iconname: 'power',
  iconsize: 'xsm',
  fullWidth: false,
  iconposition: 'right',
}

export const LargeJustIconButtonRigth = Template.bind({})
LargeJustIconButtonRigth.args = {
  type: 'submit',
  size: 'lg',
  // children: 'Large',
  bgColor: 'green',
  color: 'yellow',
  onClick: () => null,
  iconname: 'power',
  iconsize: 'xsm',
  fullWidth: false,
  iconposition: 'right',
}

export const SmallJustIconButtonLeft = Template.bind({})
SmallJustIconButtonLeft.args = {
  type: 'submit',
  size: 'sm',
  // children: 'Large',
  bgColor: 'green',
  color: 'yellow',
  onClick: () => null,
  iconname: 'power',
  iconsize: 'xsm',
  fullWidth: false,
  iconposition: 'left',
}
