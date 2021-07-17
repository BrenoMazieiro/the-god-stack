import React from 'react'
import { render, screen, fireEvent } from 'test'
import Button from '.'

describe('Button', () => {
  it('will render a Button', () => {
    render(<Button id="Ahref" type="button" href="http://test.com">Test</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Test')
  })

  it('will test onClick on a Button', () => {
    const handleClick = jest.fn()
    render(<Button id="Ahref" type="button" href="http://test.com" onClick={handleClick}>Test</Button>)
    fireEvent.click(screen.getByText(/Test/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
