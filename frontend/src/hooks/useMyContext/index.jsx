import { useContext } from 'react'
import { ThemeContext } from 'themes'
import { useHistory, useParams } from 'react-router-dom'
import { LanguageContext } from '../../i18n'

const useMyContext = () => {
  const history = useHistory()
  const params = useParams()
  const { changeLanguage, t } = useContext(LanguageContext)
  const { toggleTheme, themeType } = useContext(ThemeContext)
  return {
    toggleTheme,
    t,
    changeLanguage,
    history,
    params,
    isLoggedIn: () => !!localStorage.getItem('token'),
    themeType,
  }
}

export default useMyContext
