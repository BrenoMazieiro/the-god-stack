import React, { useCallback } from 'react'
import { useMyContext } from 'hooks'
import { MainTemplate, Div, Button } from 'components'

const HomePage = () => {
  const { history } = useMyContext()
  const handleLogout = useCallback(() => {
    localStorage.clear()
    history.push('/signin')
  })
  return (
    <MainTemplate
      header={<Div>Header</Div>}
      footer={<Div>Footer</Div>}
      id="homepage"
    >
      <Div>
        {history.location.state?.type === 'validateUser' && <Div id="validateUser">Usuário Validado com sucesso!</Div>}
        Home
        <Button type="button" onClick={handleLogout}>
          Logout
        </Button>
      </Div>
    </MainTemplate>
  )
}

export default HomePage
