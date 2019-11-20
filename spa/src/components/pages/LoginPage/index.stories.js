import React from 'react'
import { storiesOf } from '@storybook/react'
import { LoginPage } from 'components'

storiesOf('LoginPage', module)
  .add('default', () => (
    <LoginPage />
  ))
