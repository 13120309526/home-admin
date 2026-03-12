import zh from './zh'
import en from './en'

export const messages = {
  zh,
  en
}

export const getLocale = () => {
  const stored = localStorage.getItem('role-page-language')
  if (stored && messages[stored]) {
    return stored
  }
  return 'zh'
}

export const setLocale = (locale) => {
  localStorage.setItem('role-page-language', locale)
}

export default {
  messages,
  getLocale,
  setLocale
}
