import React from 'react'

import CheckboxLabel from './index'

export default {
  title: 'components/molecules/CheckboxLabel',
  component: CheckboxLabel,
}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <CheckboxLabel {...args} />

export const SmallCheckboxLabel = Template.bind({})
SmallCheckboxLabel.args = {
  id: 'checkboxlabel',
  label: 'Label',
  caption: 'Caption',
}
