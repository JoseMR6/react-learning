import { useReducer } from "react"
import { Action, FromLanguaje, Languaje, State } from "../types.d"
import {AUTO_LANGUAGE} from '../constants'


const initialState: State = {
    fromLanguaje: 'auto',
    toLanguaje: 'en',
    fromText: '',
    result: '',
    loading: false
}

function reducer(state: State, action: Action) {
    const { type } = action

    if (type === 'INTERCHANGE_LANGUAJES') {
        if(state.fromLanguaje === AUTO_LANGUAGE) return state

        return {
            ...state,
            fromLanguaje: state.toLanguaje,
            toLanguaje: state.fromLanguaje
        }
    }

    if (type === 'SET_FROM_LANGUAGE') {
        return {
            ...state,
            fromLanguaje: action.payload
        }
    }

    if (type === 'SET_TO_LANGUAGE') {
        return {
            ...state,
            toLanguaje: action.payload
        }
    }

    if (type === 'SET_FROM_TEXT') {
        return {
            ...state,
            loading: true,
            fromText: action.payload,
            result: ''
        }
    }

    if (type === 'SET_RESULT') {
        return {
            ...state,
            loading: false,
            result: action.payload
        }
    }

    return state
}

export function useStore() {
    const [{
        fromLanguaje,
        toLanguaje,
        fromText,
        result,
        loading
    }, dispatch] = useReducer(reducer, initialState)

    const interchangeLanguages = () => {
        dispatch({ type: 'INTERCHANGE_LANGUAJES' })
    }

    const setFromLanguage = (payload: FromLanguaje) => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload: payload })
    }

    const setToLanguage = (payload: Languaje) => {
        dispatch({ type: 'SET_TO_LANGUAGE', payload: payload })
    }

    const setFromText = (payload: string) => {
        dispatch({ type: 'SET_FROM_TEXT', payload: payload })
    }

    const setResult = (payload: string) => {
        dispatch({ type: 'SET_RESULT', payload: payload })
    }

    return {
        fromLanguaje,
        toLanguaje,
        fromText,
        result,
        loading,
        interchangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult
    }
}