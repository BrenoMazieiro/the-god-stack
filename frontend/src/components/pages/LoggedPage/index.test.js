import React from 'react'
import { shallow } from 'enzyme'
import { mockLocalStorage } from 'utils'
import LoggedPage from '.'

const wrap = ({ id, children }) => shallow(
  <LoggedPage id={id}>{children}</LoggedPage>,
)

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ theme: {} }),
  }
})

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({ push: () => true }),
  }
})

const { getItemMock } = mockLocalStorage()

describe('LoggedPage', () => {
  it('will render LoggedPage component', () => {
    getItemMock.mockReturnValue('token')
    const wrapper = wrap({
      id: 'test', children: 'Text',
    })
    expect(wrapper.find({ id: 'test' })).toHaveLength(1)
  })

  // it('will render LoggedPage component and its children', () => {
  //   const wrapper = wrap({
  //     id: 'test', children: 'Text',
  //   })
  //   expect(wrapper.children()).toEqual('Text')
  //   expect(wrapper.contains('Text')).toBe(true)
  // })
})
