import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enUS from './locales/enUS'
import ptBR from './locales/ptBR'
import ES from './locales/ES'

const resources = {
  enUS: {
    translation: enUS,
  },
  ptBR: {
    translation: ptBR,
  },
  ES: {
    translation: ES,
  },
}

const lng = JSON.parse(localStorage.getItem('language')) || 'enUS'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
