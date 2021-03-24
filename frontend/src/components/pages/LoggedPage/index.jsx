import React from 'react'
import PropTypes from 'prop-types'
import { CheckLoggedInn } from 'utils'
import { Div } from 'components'

const LoggedPage = ({ id, children }) => {
  if (!CheckLoggedInn()) return null
  return (
    <Div id={id}>{children}</Div>
  )
}

LoggedPage.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export default LoggedPage
