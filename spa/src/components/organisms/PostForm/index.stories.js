import React from 'react'
import { storiesOf } from '@storybook/react'
import { PostForm } from 'components'

storiesOf('PostForm', module)
  .add('default', () => (
    <PostForm />
  ))
