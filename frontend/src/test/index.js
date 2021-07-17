import React from 'react'
import { render } from '@testing-library/react'
import PropTypes from 'prop-types'
import Providers from '../Providers'

const AllTheProviders = ({ children }) => {
  return (
    <Providers>
      {children}
    </Providers>
  )
}

AllTheProviders.propTypes = {
  children: PropTypes.any,
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
