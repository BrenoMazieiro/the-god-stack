import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ApolloConsumer } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import { Link, IsLoggedIn } from 'components'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 300;
    color: ${palette('grayscale', 2)};
    font-size: 1.25rem;
    &.active {
      color: ${palette('grayscale', 0)};
    }
  }
`

const PrimaryNavigation = ({history, ...props}) => {
  const logout = async (e, client) => {
    e.preventDefault()
    localStorage.clear()
    client.resetStore()
    history.push('/')
  }
  return (
    <ApolloConsumer>
      {
        client => (
          <Nav {...props}>
            <li><Link to="/" exact activeClassName="active">Home</Link></li>
            {
              IsLoggedIn() ?
              <li><Link onClick={e => logout(e, client)} activeClassName="active">Logout</Link></li> :
              <li><Link to="/login" activeClassName="active">Login</Link></li>
            }
          </Nav>
        )
      }
    </ApolloConsumer>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
  history: PropTypes.object.isRequired,
}

export default withRouter(PrimaryNavigation)
