import { useMemo, useState } from 'react'
import './App.css'
import { UsersList } from './components/UsersList'
import { SortBy } from './types.d'
import { useUsers } from './hooks/useUsers'
import { Results } from './components/Results'

function App() {
  const { isLoading, isError, users, refetch, fetchNextPage, hasNextPage } = useUsers()

  //const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  //const [loading, setLoading] = useState(false)
  //const [error, setError] = useState(false)
  //const [currentPage, setCurrentPage] = useState(1)

  //const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleReset = async () => {
    //setUsers(originalUsers.current)
    await refetch()
  }

  const handleDelete = (email: string) => {
    /*const filteredUsers = users.filter((user) => {
      return user.email !== email
    })*/
    //setUsers(filteredUsers)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  /*useEffect(() => {
    setLoading(true)
    setError(false)

    fetchUsers(currentPage)
      .then(users => {
        setUsers(prevUsers => {
          const newUsers = currentPage===1
            ? users
            : prevUsers.concat(users)
          if(currentPage===1) originalUsers.current = newUsers
          return newUsers
        })
      })
      .catch(err => {
        setError(err)
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [currentPage])*/

  const filteredUsers = useMemo(() => {
    return filterCountry != null && filterCountry.length > 0
      ? users.filter(user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers
    if (sorting === SortBy.COUNTRY) {
      //toSorted es mas moderno
      return [...filteredUsers].sort((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
    }
    if (sorting === SortBy.NAME) {
      return [...filteredUsers].sort((a, b) => {
        return a.name.first.localeCompare(b.name.first)
      })
    }
    if (sorting === SortBy.LAST) {
      return [...filteredUsers].sort((a, b) => {
        return a.name.last.localeCompare(b.name.last)
      })
    }

    return filteredUsers
  }, [filteredUsers, sorting])

  return (
    <>
      <h1>Prueba Tecnica</h1>
      <Results/>
      <header>
        <button onClick={toggleColors}>
          Colorear Filas
        </button>
        <button onClick={toggleSortByCountry}>
          {sorting === SortBy.COUNTRY ? 'No Ordenar por Pais' : 'Ordenar por País'}
        </button>
        <button onClick={handleReset}>
          Resetear estado
        </button>
        <input placeholder='Filtrar por Pais' onChange={(e) => {
          setFilterCountry(e.target.value)
        }} />
      </header>
      <main>
        {users.length > 0 &&
          <UsersList changeSorting={handleChangeSort} deleteUser={handleDelete} showColors={showColors} users={sortedUsers} />
        }

        {isLoading && <p>Cargando...</p>}
        {isError && <p>Ocurrio error</p>}
        {!isLoading && !isError && users.length === 0 && <p>No hay Usuarios</p>}

        {!isLoading && !isError && hasNextPage === true &&
          <button onClick={() => {
            //setCurrentPage(currentPage + 1)
            fetchNextPage()
          }
          }>Mas Resultados</button>
        }

        {!isLoading && !isError && hasNextPage===false && <p>No hay mas resultados</p>}
      </main>
    </>
  )
}

export default App
