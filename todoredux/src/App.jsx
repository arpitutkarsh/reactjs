import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/addTodo'
import './App.css'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='mb-2'>Todo using Redux</h1>
      <AddTodo/>
      <Todos/>
      
      
    </div>
  )
}

export default App
