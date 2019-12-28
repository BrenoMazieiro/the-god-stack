import React, { Suspense } from 'react'
import { configure, addDecorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'components/themes/default'
import { withInfo } from '@storybook/addon-info'
import { ApolloProvider } from 'react-apollo'
import { client } from '../../src/apolloConfig'

const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(
  withInfo({
    header: false, // Global configuration for the info addon across all of your stories.
  }),
)
addDecorator((story) => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{story()}</ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </Suspense>
))

configure(loadStories, module)
