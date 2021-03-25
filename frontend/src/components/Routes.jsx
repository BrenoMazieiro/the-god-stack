import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePage, LoginPage } from 'components'

const Routes = () => {
  return (
    <Switch id="Routes">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
    </Switch>
  )
}

export default Routes
