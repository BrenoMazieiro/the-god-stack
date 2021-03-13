import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import { GlobalStyles, ThemeProvider } from 'themes'
import { client } from './apolloConfig'
import { App } from './components/App'

const renderApp = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  )
}

render(renderApp(), document.getElementById('app'))
