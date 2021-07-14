import React from 'react'

import Textfield from '.'

export default {
  title: 'components/molecules/Textfield',
  component: Textfield,
}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Textfield {...args} />

export const TextfieldExample = Template.bind({})
TextfieldExample.args = {
  id: 'name',
  placeholder: 'Placeholder',
  type: 'text',
  helper: 'This a helper example',
  required: true,
  leftIconName: 'anchor',
  rightIconName: 'power',
  onRightIconClick: () => true,
  reference: () => true,
}

export const TextfieldErrorExample = Template.bind({})
TextfieldErrorExample.args = {
  id: 'name',
  placeholder: 'Placeholder',
  type: 'text',
  helper: 'This a helper example',
  required: true,
  status: 'error',
  leftIconName: 'anchor',
  rightIconName: 'power',
  onRightIconClick: () => true,
  reference: () => true,
}
