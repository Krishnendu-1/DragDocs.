import { useState } from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-zinc-900'>
    
       <Background/>
       <Foreground/>
    </div>
  )
}

export default App
