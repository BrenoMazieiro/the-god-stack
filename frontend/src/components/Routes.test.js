import React from 'react'
import { shallow } from 'enzyme'
import Routes from './Routes'

const wrap = () => shallow(<Routes />)

describe('Routes', () => {
  it('will render a Routes component', () => {
    const wrapper = wrap()
    expect(wrapper.find({ id: 'Routes' })).toHaveLength(1)
  })
})
