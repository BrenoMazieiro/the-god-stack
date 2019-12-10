import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  Block,
} from 'components'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 0px;
  margin: -15px;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const Text = styled.div`
  margin-left: 1rem;
  color: ${palette({ grayscale: 5 }, 1)};
  overflow: auto;
  > :first-child {
    margin: 0;
  }
`

const InternacionalizationMenu = ({ ...props }) => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <Wrapper>
      <Text onClick={() => changeLanguage('ptBR')} {...props}>PT</Text>
      <Text onClick={() => changeLanguage('enUS')} {...props}>EN</Text>
      <Text onClick={() => changeLanguage('esES')} {...props}>ES</Text>
    </Wrapper>
  )
}

InternacionalizationMenu.propTypes = {
  palette: PropTypes.string,
}

InternacionalizationMenu.defaultProps = {
  palette: 'grayscale',
}

export default withRouter(InternacionalizationMenu)
