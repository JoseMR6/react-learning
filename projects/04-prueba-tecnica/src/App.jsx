//import { useEffect, useState } from "react"
//import { getRandomFact } from "./services/facts.js"
import { useCatImage } from "./hooks/useCatImage.js"
import { useCatFact } from "./hooks/useCatFact.js"

import './App.css'
import { Otro } from "./Components/Otro.jsx"

//const CAT_ENDPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`

/*function useCatImage ({fact}) {
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
}*/

/*const useCatFact = () => {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))  
    }

    useEffect(refreshFact, [])

    return {fact, refreshFact}
}*/

export function App () {
    //const [fact, setFact] = useState()
    const {fact, refreshFact} = useCatFact()
    const {imageUrl} = useCatImage({fact})
    //const [imageUrl, setImageUrl] = useState()

    /*const getRandomFact = () => {
        fetch(CAT_ENDPOINT_RAMDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                setFact(fact)
            })
    }*/

    /*useEffect(() => {
        //getRandomFact()
        getRandomFact().then(setFact)  
    }, [])*/

    /*useEffect(() => {
        if (!fact) return
        
        const firstWord = fact.split(' ')[0]

        fetch(`https://cataas.com/cat/says/${firstWord}`)
            //.then(res => res.json())
            .then(response => {
                //console.log(response)
                const {url} = response
                setImageUrl(url)
            })
    }, [fact])*/

    /*const handleClick = () => {
        fetch(CAT_ENDPOINT_RAMDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                setFact(fact)
            })
    }*/

    const handleClick = async () => {
        /*const newFact = await getRandomFact()
        setFact(newFact)*/
        refreshFact()
    }

    return (
        <main>
            <h1>Ap de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt='cat image'/>}
        </main>

        /*<main>
            <h1>App de gatitos</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt='cat image'/>}
            </section>
            
        </main>*/
        
    )
}