import React from 'react'
import { shallow } from 'enzyme'
import SignInForm from '.'

const wrap = ({
  handleSubmit, username, password, errorMessage,
}) => shallow(
  <SignInForm
    handleSubmit={handleSubmit}
    username={username}
    password={password}
    errorMessage={errorMessage}
  />,
)

jest.mock('hooks', () => {
  const translations = jest.requireActual('i18n/LanguageProvider/locales')
  return {
    useMyContext: () => ({ t: translations.default['en-US'] }),
  }
})

describe('SignInForm', () => {
  it('will render SignInForm component', () => {
    const wrapper = wrap({
      handleSubmit: () => true, username: 'username', password: 'password', errorMessage: '',
    })
    expect(wrapper.find({ id: 'SignInForm' })).toHaveLength(1)
  })

  it('will render SignInForm component with error', () => {
    const wrapper = wrap({
      handleSubmit: () => true, username: 'username', password: 'password', errorMessage: 'error',
    })
    expect(wrapper.find({ id: 'errorMessage' })).toHaveLength(1)
  })

  it('will render SignInForm component without error', () => {
    const wrapper = wrap({
      handleSubmit: () => true, username: 'username', password: 'password', errorMessage: '',
    })
    expect(wrapper.find({ id: 'errorMessage' })).toHaveLength(0)
  })
})
