import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { LanguageContext } from 'i18n'
import translations from './locales'

const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(localStorage.getItem('locale') || navigator.language)

  const changeLanguage = (lang) => {
    localStorage.setItem('locale', lang)
    setLocale(lang)
  }

  return (
    <LanguageContext.Provider
      value={
        {
          t: translations[locale] || translations['en-US'],
          changeLanguage,
        }
      }
    >
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = {
  children: PropTypes.any.isRequired,
}

export default LanguageProvider
