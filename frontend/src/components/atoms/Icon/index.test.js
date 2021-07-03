import React from 'react'
import { shallow } from 'enzyme'
import Icon from '.'

const wrap = ({ iconname, iconsize }) => shallow(<Icon iconname={iconname} iconsize={iconsize} />)

describe('Icon', () => {
  it('will render a large Icon component when no size is sent', () => {
    const wrapper = wrap({ iconname: 'power', iconsize: 'xsm' })
    expect(wrapper.find({ id: 'icon' })).toHaveLength(1)
  })
})
