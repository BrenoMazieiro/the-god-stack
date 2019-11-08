// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'components/themes/default'
import { withInfo } from '@storybook/addon-info'

const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator((story) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </BrowserRouter>
))
addDecorator(
  withInfo({
    header: false, // Global configuration for the info addon across all of your stories.
  })
)

configure(loadStories, module)
