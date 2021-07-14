import React from 'react'
import { shallow } from 'enzyme'
import Icon from '.'

const wrap = ({ iconname }) => shallow(<Icon iconname={iconname} />)

describe('Icon', () => {
  it('will render a large Icon component when no size is sent', () => {
    const wrapper = wrap({ iconname: 'power' })
    expect(wrapper.find({ id: 'icon' })).toHaveLength(1)
  })
})
