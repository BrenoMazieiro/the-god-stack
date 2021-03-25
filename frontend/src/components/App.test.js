import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const wrap = () => shallow(<App />)

describe('App', () => {
  it('will render a App component', () => {
    const wrapper = wrap()
    expect(wrapper.find({ id: 'App' })).toHaveLength(1)
  })
})
