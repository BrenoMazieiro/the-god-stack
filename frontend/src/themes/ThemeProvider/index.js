import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Themes, ThemeContext } from 'themes'
import { CLIENT } from 'environment'
import { ThemeProvider as SThemeProvider } from 'styled-components'

const ThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = useState(JSON.parse(localStorage.getItem('theme')) || 'dark')
  const theme = Themes[CLIENT] ? Themes[CLIENT][themeType] : Themes.default[themeType]

  const toggleTheme = () => {
    setThemeType(themeType === 'light' ? 'dark' : 'light')
  }

  return (
    <SThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </SThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.any.isRequired,
}

export default ThemeProvider
