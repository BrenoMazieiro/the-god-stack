import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  HomePage, SignInPage, SignUpPage, PrivateRoute, Dashboard,
} from 'components'

const Routes = () => {
  return (
    <Switch id="Routes">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/signin">
        <SignInPage />
      </Route>
      <Route exact path="/signup">
        <SignUpPage />
      </Route>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  )
}

export default Routes
