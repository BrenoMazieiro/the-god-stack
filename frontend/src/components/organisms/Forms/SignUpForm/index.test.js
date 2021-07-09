import React from 'react'
import { shallow } from 'enzyme'
import SignUpForm from '.'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => 'context_value',
}))

jest.mock('hooks', () => {
  const translations = jest.requireActual('i18n/LanguageProvider/locales')
  return {
    useMyContext: () => ({ t: translations.default['en-US'] }),
  }
})

const wrap = ({
  handleSubmit, errorMessages,
}) => shallow(
  <SignUpForm
    handleSubmit={handleSubmit}
    name={() => true}
    email={() => true}
    username={() => true}
    password={() => true}
    confirmPassword={() => true}
    errorMessages={errorMessages}
  />,
)

describe('SignUpForm', () => {
  it('will render SignUpForm component', () => {
    const wrapper = wrap({
      handleSubmit: () => true,
      errorMessages: [],
    })
    expect(wrapper.find({ id: 'SignUpForm' })).toHaveLength(1)
  })

  it('will render SignUpForm component with error', () => {
    const wrapper = wrap({
      handleSubmit: () => true,
      errorMessages: [{ path: 'name', message: 'errorMessage' }],
    })
    expect(
      wrapper
        .find({ id: 'SignUpForm' })
        .find({ id: 'name' })
        .dive()
        .find({ id: 'name-helper' }),
    ).toHaveLength(1)
  })

  it('will render SignUpForm component with error', () => {
    const wrapper = wrap({
      handleSubmit: () => true,
      errorMessages: [],
    })
    expect(
      wrapper
        .find({ id: 'SignUpForm' })
        .find({ id: 'name' })
        .dive()
        .find({ id: 'name-helper' }),
    ).toHaveLength(0)
  })
})
