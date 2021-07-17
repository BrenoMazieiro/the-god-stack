import React from 'react'
import { render, screen, fireEvent } from 'test'
import SignUpForm from '.'

describe('SignUpForm', () => {
  beforeEach(() => {
    const mockedFunc = jest.fn()
    render(
      <SignUpForm
        errorMessages={[]}
        name={mockedFunc}
        email={mockedFunc}
        username={mockedFunc}
        password={mockedFunc}
        confirmPassword={mockedFunc}
        handleSubmit={mockedFunc}
      />,
    )
  })

  it('will assure form styles', () => {
    expect(screen.getByTestId('SignUpForm')).toHaveStyle({ padding: '40px' })
  })

  it('will assure form input', () => {
    const inputName = screen.getByTestId('name')
    fireEvent.change(inputName, { target: { value: 'Name' } })
    expect(inputName.value).toBe('Name')

    const inputemail = screen.getByTestId('email')
    fireEvent.change(inputemail, { target: { value: 'email' } })
    expect(inputemail.value).toBe('email')

    const inputusername = screen.getByTestId('username')
    fireEvent.change(inputusername, { target: { value: 'username' } })
    expect(inputusername.value).toBe('username')

    const inputpassword = screen.getByTestId('password')
    fireEvent.change(inputpassword, { target: { value: 'password' } })
    expect(inputpassword.value).toBe('password')

    const inputconfirmPassword = screen.getByTestId('confirmPassword')
    fireEvent.change(inputconfirmPassword, { target: { value: 'confirmPassword' } })
    expect(inputconfirmPassword.value).toBe('confirmPassword')
  })

  it('will assure password and confirmPassword fields are hidden', () => {
    const inputpassword = screen.getByTestId('password')
    fireEvent.change(inputpassword, { target: { value: 'password' } })
    expect(inputpassword).toHaveAttribute('type', 'password')

    const inputconfirmPassword = screen.getByTestId('confirmPassword')
    fireEvent.change(inputconfirmPassword, { target: { value: 'confirmPassword' } })
    expect(inputconfirmPassword).toHaveAttribute('type', 'password')
  })
})
