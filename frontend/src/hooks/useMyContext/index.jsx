import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from 'themes'
import { useHistory } from 'react-router-dom'

const useMyContext = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { t, i18n } = useTranslation()
  const history = useHistory()
  return {
    theme,
    toggleTheme,
    t,
    i18n,
    history,
  }
}

export { useMyContext }
