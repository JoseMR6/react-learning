import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'


const users = [
  {
    userName: 'Kikobeats',
    name: 'Jose Manuel',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel',
    isFollowing: false
  },
  {
    userName: 'vxnder',
    name: 'VanderHart',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

function App() {

  return (
    <section className="App">
      {
        users.map(user=>{
          const {userName,name,isFollowing} = user
          return (
            <TwitterFollowCard 
              key={userName}
              initialIsFollowing ={isFollowing}
              userName={userName} 
              name={name}/>
          )
        })
      }
    </section>
  )
}

export default App
