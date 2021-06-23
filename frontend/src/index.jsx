import React from 'react'
import { render } from 'react-dom'

import App from './components/App'
import Providers from './Providers'

const renderApp = () => {
  return (
    <Providers>
      <App />
    </Providers>
  )
}

render(renderApp(), document.getElementById('app'))
