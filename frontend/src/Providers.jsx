import React from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from 'i18n'
import { GlobalStyles, ThemeProvider } from 'themes'
import { client } from './apolloConfig'

const Providers = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <LanguageProvider>
        <ThemeProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </ApolloProvider>
  )
}

Providers.propTypes = {
  children: PropTypes.any,
}
export default Providers
