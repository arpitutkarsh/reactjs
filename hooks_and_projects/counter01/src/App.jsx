import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  //let counter = 50;
  const addValue = () => {
    //counter = counter + 1;
    if(counter >= 30){
      alert("Error, value can't be more than 30. Click Decrease Value");
    }
    else{
      setCounter(counter+1);
    }
    
    
  }

  const decreaseValue = () => {
    counter = counter - 1;
    console.log("Value Decreased");
    if(counter >= 0){
      setCounter(counter);
    }
    else{
      alert("Error, value can't be less than 0. Click Increase Value");
    }
    
  }

  return (
    <>
      <h1>React JS</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}>Increase  Value</button>
      <br/>
      <button onClick = {decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
