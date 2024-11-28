import { PropTypes } from 'prop-types'
import { useEffect } from 'react'

export default function SearchPage ({routeParams}) {
    useEffect(()=>{
        document.title=`Has buscado ${routeParams.query}`
    }, [])
    
    return (
        <>
            <h1>Buscar {routeParams.query}</h1>
        </>
    )
}

SearchPage.propTypes = {
    routeParams: PropTypes.object
}