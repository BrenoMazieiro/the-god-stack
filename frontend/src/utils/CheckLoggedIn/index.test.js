import { mockLocalStorage } from 'utils'
import CheckLoggedInn from '.'

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({ push: () => true }),
  }
})

const { getItemMock } = mockLocalStorage()

describe('CheckLoggedInn', () => {
  it('will test when user is loggedIn', () => {
    getItemMock.mockReturnValue('token')
    expect(CheckLoggedInn()).toBe(true)
  })
  it('will test when user is not loggedIn', () => {
    // getItemMock.mockReturnValue('token')
    expect(CheckLoggedInn()).toBe(false)
  })
})
