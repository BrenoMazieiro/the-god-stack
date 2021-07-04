import React, { useRef } from 'react'

import Textfield from '.'

export default {
  title: 'components/molecules/Textfield',
  component: Textfield,
}

const Template = (args) => {
  const reference = useRef()
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Textfield reference={reference} {...args} />
}

export const TextfieldExample = Template.bind({})
TextfieldExample.args = {
  id: 'name',
  placeholder: 'Placeholder',
  type: 'text',
  helper: 'This a helper example',
  required: true,
}
