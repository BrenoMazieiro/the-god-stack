import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { ApolloConsumer } from 'react-apollo'

import {
  Button, IsLoggedIn, Block,
} from 'components'

const LoginLogoutButton = ({ history }) => {
  const logout = async (e, client) => {
    e.preventDefault()
    localStorage.clear()
    client.resetStore()
    history.push('/')
  }

  return (
    <ApolloConsumer>
      {
        (client) => (
          <Block>
            {
              IsLoggedIn()
                ? <li><Button onClick={(e) => logout(e, client)} activeClassName="active">Logout</Button></li>
                : <li><Button to="/login" activeClassName="active">Login</Button></li>
            }
          </Block>
        )
      }
    </ApolloConsumer>
  )
}

LoginLogoutButton.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(LoginLogoutButton)
