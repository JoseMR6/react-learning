import {Link} from '../Link.jsx'

export default function HomePage (){
    return (
      <>
        <h1>Home</h1>
        <p>Página de Ejemplo para React Router</p>
        <Link to='/about'>Sobre nosotros</Link>
      </>
    )
  }