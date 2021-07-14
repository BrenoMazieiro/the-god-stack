import React from 'react'

import Toggle from './index'

export default {
  title: 'components/molecules/Toggle',
  component: Toggle,
}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Toggle {...args} reference={() => true} />

export const SmallToggle = Template.bind({})
SmallToggle.args = {
  id: 'Toggle',
  label: 'Label',
  caption: 'Caption',
  iconname: 'power',
  iconcolor: '#2196F3',
}
