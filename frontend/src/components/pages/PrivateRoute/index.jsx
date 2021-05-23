/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token')

  return (
    <Route
      id="PrivateRoute"
      {...rest}
      render={(props) => token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.object,
}

export default PrivateRoute
