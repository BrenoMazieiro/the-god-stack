import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { ApolloConsumer } from 'react-apollo'
import { useTranslation } from 'react-i18next'

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

  const { t } = useTranslation()

  return (
    <ApolloConsumer>
      {
        (client) => (
          <Block>
            {
              IsLoggedIn()
                ? <li><Button onClick={(e) => logout(e, client)} activeclassname="active">{t('molecules.LoginLogoutButton.logout')}</Button></li>
                : <li><Button to="/login" activeclassname="active">{t('molecules.LoginLogoutButton.login')}</Button></li>
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
