import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h4> States in React</h4>
        {/* <LikeButton/> */}
        <Counter/>
    </>
  )
}

export default App
