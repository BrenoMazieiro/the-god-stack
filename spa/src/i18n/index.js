import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLoggedUser } from 'components'
import ptBR from './locales/ptBR'
import enUS from './locales/enUS'
import esES from './locales/esES'


// the translations
// (tip move them in a JSON file and import them)
const resources = {
  enUS: {
    translation: enUS,
  },
  ptBR: {
    translation: ptBR,
  },
  esES: {
    translation: esES,
  },
}

const user = getLoggedUser()

const lng = user ? user.language : 'enUS'
// const lng = "enUS"
// const lng = 'esES'
// const lng = "ptBR"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
