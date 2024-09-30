import { useCatImage } from "../hooks/useCatImage.js"

export function Otro () {
    const {imageUrl} = useCatImage({fact: 'Random fact'})
    
    return (
        <>
            {imageUrl && <img src={imageUrl}/>}
        </>
        
    )
}