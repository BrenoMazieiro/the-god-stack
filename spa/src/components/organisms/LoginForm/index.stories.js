import React from 'react'
import { storiesOf } from '@storybook/react'
import { LoginForm } from 'components'

storiesOf('LoginForm', module)
  .add('default', () => (
    <LoginForm />
  ))
