import { useEffect, useRef, useState, useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import debounce from 'just-debounce-it'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstImput = useRef(true)

  useEffect(() => {
    if (isFirstImput.current) {
      isFirstImput.current = search == ''
      return
    }
    if (search == '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)

  }, [search])

  return { search, updateSearch, error }
}

function App() {
  //https://www.omdbapi.com/  bc76d840
  //http://www.omdbapi.com/?apikey=bc76d840&s=Avengers

  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , []
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    /*const fields = new window.FormData(event.target)
    const query = fields.get('query')
    console.log(query)*/
    /*const {query} = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log(query)*/
    //console.log({search})
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)

    /*if(newQuery == ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if(newQuery.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if(newQuery.length < 3){
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)*/
  }



  return (
    <div className='page'>
      <header>
        <h1>Buscador de pelicula</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' type='text' placeholder='Pelicula' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando ...</p> : <Movies movies={movies} />
        }

      </main>
    </div >
  )
}

export default App
