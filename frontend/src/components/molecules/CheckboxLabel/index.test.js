import React from 'react'
import { shallow } from 'enzyme'
import CheckboxLabel from '.'

jest.mock('hooks', () => {
  const translations = jest.requireActual('i18n/LanguageProvider/locales')
  return {
    useMyContext: () => ({ t: translations.default['en-US'] }),
  }
})

const wrap = ({
  id, label, caption, className, size,
}) => shallow(
  <CheckboxLabel id={id} reference={() => true} onClick={() => true} label={label} caption={caption} className={className} size={size} />,
)

describe('CheckboxLabel', () => {
  it('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(2)
  })
})
