import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from '.'

const wrap = ({
  handleSubmit, username, password, errorMessage,
}) => shallow(
  <LoginForm
    handleSubmit={handleSubmit}
    username={username}
    password={password}
    errorMessage={errorMessage}
  />,
)

jest.mock('hooks', () => {
  const translations = jest.requireActual('i18n/LanguageProvider/locales')
  return {
    useMyContext: () => ({ theme: {}, t: translations.default['en-US'] }),
  }
})

describe('LoginForm', () => {
  it('will render LoginForm component', () => {
    const wrapper = wrap({
      handleSubmit: () => true, username: 'username', password: 'password', errorMessage: '',
    })
    expect(wrapper.find({ id: 'LoginForm' })).toHaveLength(1)
  })

  it('will render LoginForm component with error', () => {
    const wrapper = wrap({
      handleSubmit: () => true, username: 'username', password: 'password', errorMessage: 'error',
    })
    expect(wrapper.find({ id: 'errorMessage' })).toHaveLength(1)
  })

  it('will render LoginForm component without error', () => {
    const wrapper = wrap({
      handleSubmit: () => true, username: 'username', password: 'password', errorMessage: '',
    })
    expect(wrapper.find({ id: 'errorMessage' })).toHaveLength(0)
  })
})
