import { useState } from 'react'

export function TwitterFollowCard ({userName='unknown', name, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const imageSrc = `https://unavatar.io/twitter/${userName}`

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'is-following' : ''

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className='tw-follow-card'>
            <header>
                <img 
                    alt="El avatar de Kikobeats" 
                    src={imageSrc}/>
                <div>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='followText'>{text}</span>
                    <span className='stopFollow'>Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}