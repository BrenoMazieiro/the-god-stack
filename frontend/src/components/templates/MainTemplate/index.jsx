import React from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper, HeaderWrapper, ContentWrapper, FooterWrapper,
} from './styles'

const MainTemplate = ({ header, children, footer }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        {header}
      </HeaderWrapper>
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <FooterWrapper>
        {footer}
      </FooterWrapper>
    </Wrapper>
  )
}

MainTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
}

export default MainTemplate
