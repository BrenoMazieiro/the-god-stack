// https://github.com/diegohaz/arc/wiki/Example-app
import { hot } from 'react-hot-loader/root'
import 'babel-polyfill'
import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import App from 'components/App'
import { client } from './apolloConfig'

const renderApp = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Suspense>
)
const root = document.getElementById('app')
render(renderApp(), root)
export default hot(renderApp)
