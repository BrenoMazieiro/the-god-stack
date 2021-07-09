import React from 'react'

import Span from '.'

export default {
  title: 'components/atoms/Span',
  component: Span,

}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Span {...args} />

export const SpanExample = Template.bind({})
SpanExample.args = {
  children: 'This is a text example',
}
