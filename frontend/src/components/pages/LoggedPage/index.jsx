import React from 'react'
import PropTypes from 'prop-types'
import { CheckLoggedInn } from 'utils'
import { Div } from 'components'

const LoggedPage = ({ idPage, children }) => {
  if (!CheckLoggedInn()) return null

  return (
    <Div id={idPage}>{children}</Div>
  )
}

LoggedPage.propTypes = {
  idPage: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export { LoggedPage }
