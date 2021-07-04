import React from 'react'

import Text from '.'

export default {
  title: 'components/atoms/Text',
  component: Text,

}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Text {...args} />

export const TextExample = Template.bind({})
TextExample.args = {
  children: 'This is a text example',
}
