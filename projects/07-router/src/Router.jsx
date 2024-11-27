/* eslint-disable react/prop-types */
import { PropTypes } from 'prop-types'
import { Children, useEffect, useState } from 'react'
import { EVENTS } from './consts'
import { match } from 'path-to-regexp'
import { getCurrentPath } from './utils'

export function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(getCurrentPath())

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(getCurrentPath())
        }

        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)

        return () => {
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
            window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
        }
    }, [])

    let routeParams = {}

    //add routes fron children
    const routesFromChildrem = Children.map(children, ({props, type}) => {
        const {name} = type
        const isRoute = name == 'Route'

        return isRoute ? props : null
    })

    const routesToUse = routes.concat(routesFromChildrem).filter(Boolean)

    const Page = routesToUse.find(({ path }) => {
        if (path == currentPath) return true

        const matcherURL = match(path, { decode: decodeURIComponent })
        const matched = matcherURL(currentPath)

        if (!matched) return false

        routeParams = matched.params  // { query: 'javascript' } // /search/javascript
        return true

    })?.Component

    return Page
        ? <Page routeParams={routeParams} />
        : <DefaultComponent routeParams={routeParams} />
}

Router.propTypes = {
    routes: PropTypes.array,
    defaultComponent: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ])
}