import React from 'react'

import Icon from '.'

export default {
  title: 'components/atoms/Icons',
  component: Icon,
}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Icon {...args} />

export const SIcon = Template.bind({})
SIcon.args = {
  iconname: 'power',
}
