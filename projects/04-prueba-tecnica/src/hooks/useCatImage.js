import { useEffect, useState } from "react"

export function useCatImage ({fact}) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return
        
        const firstWord = fact.split(' ')[0]

        fetch(`https://cataas.com/cat/says/${firstWord}`)
            //.then(res => res.json())
            .then(response => {
                //console.log(response)
                const {url} = response
                setImageUrl(url)
            })
    }, [fact])
    
    return {imageUrl}
}