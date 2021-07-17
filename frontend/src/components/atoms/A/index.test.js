import React from 'react'
import { render, screen } from 'test'
import A from '.'

describe('A', () => {
  it('Render a A', () => {
    render(<A id="Ahref" href="http://test.com">Test</A>)
    expect(screen.getByRole('link')).toHaveTextContent('Test')
  })
})
