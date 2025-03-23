import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-yellow-400 text-black p-4 rounded -xl mb-4'>Tailwind test</h1>
      <Card username = "Arpit Utkarsh" btntext='Click Here'/>
      <Card username = "Utkarsh Arpit"/>
  
    </>
  )
}

export default App
