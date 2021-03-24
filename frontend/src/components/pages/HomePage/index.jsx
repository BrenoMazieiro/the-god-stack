import React, { useCallback } from 'react'
import { useMyContext } from 'hooks'
import { MainTemplate, LoggedPage } from 'components'

const HomePage = () => {
  const { history } = useMyContext()
  const handleLogout = useCallback(() => {
    localStorage.clear()
    history.push('/login')
  })
  return (
    <LoggedPage id="homepage">
      <MainTemplate
        header={<div>Header</div>}
        footer={<div>Footer</div>}
      >
        <div>
          Home
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </MainTemplate>
    </LoggedPage>
  )
}

export default HomePage
