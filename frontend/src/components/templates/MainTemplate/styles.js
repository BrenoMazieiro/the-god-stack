import styled from 'styled-components'
import { Div } from 'components'

export const Wrapper = styled(Div)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
`
export const ContentWrapper = styled(Div)`
  min-height: calc(100vh - 60px);
  background-color: red;
`

export const FooterWrapper = styled(Div)`
  min-height: 30px;
  background-color: green;
`

export const HeaderWrapper = styled(Div)`
  min-height: 30px;
  background-color: green;
`
