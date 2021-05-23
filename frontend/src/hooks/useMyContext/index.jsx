import { useContext } from 'react'
import { ThemeContext } from 'themes'
import { useHistory } from 'react-router-dom'
import { LanguageContext } from '../../i18n'

const useMyContext = () => {
  const history = useHistory()
  const { changeLanguage, t } = useContext(LanguageContext)
  const { theme, toggleTheme } = useContext(ThemeContext)
  return {
    theme,
    toggleTheme,
    t,
    changeLanguage,
    history,
    isLoggedIn: () => !!localStorage.getItem('token'), // by Albas
  }
}

export default useMyContext
