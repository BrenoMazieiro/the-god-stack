import React from 'react'

import Title from '.'

export default {
  title: 'components/atoms/Title',
  component: Title,

}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Title {...args} />

export const SmallTitle = Template.bind({})
SmallTitle.args = {
  id: 'title',
  children: 'This is a title example',
  size: '3',
}
