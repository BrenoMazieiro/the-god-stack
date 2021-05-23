import React from 'react'
import { shallow } from 'enzyme'
import { mockLocalStorage } from 'utils'
import PrivateRoute from '.'

const wrap = () => shallow(
  <PrivateRoute component={<div>test</div>} />,
)

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ theme: {} }),
  }
})

const { getItemMock } = mockLocalStorage()

describe('PrivateRoute', () => {
  it('will render PrivateRoute component', () => {
    const wrapper = wrap()
    getItemMock.mockReturnValue('token')
    expect(wrapper.find({ id: 'PrivateRoute' })).toHaveLength(1)
  })
})
