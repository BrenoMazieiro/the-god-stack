import React from 'react'
import { shallow } from 'enzyme'
import MainTemplate from '.'

const wrap = ({ header, children, footer }) => shallow(
  <MainTemplate header={header} footer={footer}>{children}</MainTemplate>,
)

jest.mock('hooks', () => {
  return {
    useMyContext: () => ({ theme: {} }),
  }
})

describe('MainTemplate', () => {
  it('will render MainTemplate component', () => {
    const wrapper = wrap({ children: 'Text', header: 'Header', footer: 'footer' })
    expect(wrapper.find({ id: 'MainTemplate' })).toHaveLength(1)
  })
})
