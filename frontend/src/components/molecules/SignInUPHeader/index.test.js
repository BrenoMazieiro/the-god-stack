import React from 'react'
import { shallow } from 'enzyme'
import SignInUPHeader from '.'

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ }),
  }
})

const wrap = ({
  id,
}) => shallow(
  <SignInUPHeader id={id} />,
)

describe('SignInUPHeader', () => {
  it('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })
})
