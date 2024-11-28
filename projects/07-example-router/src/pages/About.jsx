/* eslint-disable react/prop-types */
import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre Nosotros',
    description: 'Hola soy JoseMR6',
    button: 'Pagina Principal'
  },
  en: {
    title: 'About Us',
    description: 'Hi, Im JoseMR6',
    button: 'Home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <img src='https://avatars.githubusercontent.com/u/61359660?s=96&v=4' />
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}