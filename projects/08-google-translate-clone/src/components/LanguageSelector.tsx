import {Form} from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { FromLanguaje, Languaje, SectionType } from '../types.d'

/*interface Props {
    onChange: (language: string) => void
}*/

type Props =
    | {type: SectionType.From, value: FromLanguaje, onChange: (language: FromLanguaje) => void}
    | {type: SectionType.To, value: Languaje, onChange: (language: Languaje) => void}

export const LanguageSelector = ({onChange, type, value}:Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>)=>{
        onChange(event.target.value as Languaje)
    }

    return(
        <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>
            {type===SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}

            {Object.entries(SUPPORTED_LANGUAGES).map(([key,literal])=>(
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}