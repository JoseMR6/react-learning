import { useRef, useState, useMemo, useCallback } from 'react'
//import withResults from '/src/mocks/with-results.json'
//import withoutResults from '/src/mocks/no-results.json'
import { searchMovies } from '../services/movies.js'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  /*const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))*/

  const getMovies = useCallback(async ({ search }) => {
    /*if (search) {
      //setResponseMovies(withResults)
      fetch(`http://www.omdbapi.com/?apikey=bc76d840&s=${search}`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json)
        })
    } else {
      setResponseMovies(withoutResults)
    }*/
    //const newMovies = await searchMovies({search})
    //setMovies(newMovies)
    if (search == previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])


  /*const sortedMovies = sort
    ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
    : movies*/

  const sortedMovies = useMemo(() => {
    //console.log('memoSortedMovies')

    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}