/* eslint-disable react/prop-types */
import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Pagina Principal',
    description: 'Página de Ejemplo para React Router',
    button: 'Sobre nosotros'
  },
  en: {
    title: 'Home Page',
    description: 'React Router Example Page',
    button: 'About Us'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function HomePage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to='/about'>{i18n.button}</Link>
    </>
  )
}