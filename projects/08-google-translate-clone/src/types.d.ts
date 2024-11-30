import {type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES} from './constants'

export type Languaje = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguaje = Languaje | AutoLanguage

export interface State {
    fromLanguaje: FromLanguaje
    toLanguaje: Languaje
    fromText: string
    result: string
    loading: boolean
}

export type Action = 
    | {type: 'SET_FROM_LANGUAGE', payload: FromLanguaje}
    | {type: 'INTERCHANGE_LANGUAJES'}
    | {type: 'SET_TO_LANGUAGE', payload: Languaje}
    | {type: 'SET_FROM_TEXT', payload: string}
    | {type: 'SET_RESULT', payload: string}

export enum SectionType {
    From = 'from',
    To = 'to'
}
