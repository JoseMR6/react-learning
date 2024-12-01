import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants"
import { FromLanguaje, Languaje } from "../types"

export async function translate({
    fromLanguaje,
    toLanguaje,
    text
}: {
    fromLanguaje: FromLanguaje
    toLanguaje: Languaje
    text: string
}) {
    const fromCode = fromLanguaje === AUTO_LANGUAGE
        ? AUTO_LANGUAGE
        : SUPPORTED_LANGUAGES[fromLanguaje]

    const toCode = SUPPORTED_LANGUAGES[toLanguaje]
    
    return `(${text})from(${fromCode})to(${toCode})`
}