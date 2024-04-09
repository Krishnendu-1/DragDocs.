import { useState } from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-zinc-900'>
    
       <Background/>
       <Foreground/>
       <SpeedInsights/>
    </div>
  )
}

export default App
