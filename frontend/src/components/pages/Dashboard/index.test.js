import React from 'react'
import { shallow } from 'enzyme'
import DashboardPage from '.'

const wrap = () => shallow(
  <DashboardPage />,
)

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ theme: {} }),
  }
})

describe('DashBoardPage', () => {
  it('will render DashBoardPage component', () => {
    const wrapper = wrap()
    expect(wrapper.find({ id: 'dashboardpage' })).toHaveLength(1)
  })
})
