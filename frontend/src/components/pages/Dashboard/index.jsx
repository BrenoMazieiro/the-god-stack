import React from 'react'
import { MainTemplate, Div, Button } from 'components'
import { useMyContext } from 'hooks'

const Dashboard = () => {
  const { history } = useMyContext()
  return (
    <MainTemplate
      footer={<Div>Footer</Div>}
      header={<Div>Header</Div>}
      id="dashboardpage"
    >
      <Button
        type="button"
        onClick={() => {
          localStorage.clear()
          history.push('/signin')
        }}
      >
        Logout

      </Button>
    </MainTemplate>
  )
}

export default Dashboard
