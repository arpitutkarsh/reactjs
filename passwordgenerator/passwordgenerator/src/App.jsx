import { useState, useCallback , useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// useCallback is a react hook that lets you cache a function definition between re-renders
function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [symbol, setsymbol] = useState(false);
  const [password, setpassword] = useState("")
  //useRef
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback( () => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number){
      string += "1234567890";
    }
    if(symbol){
      string += "@#$*_{}[]\!$%^&*()_-++="
    }

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char);
    }
    setpassword(pass)
  } , [length, number, symbol, setpassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    alert("Copied to Clipboard");
  }, [password])
  useEffect(() => 
    {passwordGenerator()}, [length, number, symbol, passwordGenerator])
  return (
    <>
    <div className='text w-full max-w-md mx-auto shadow-md rounded-lg px-1 my-1 '>
      <h1 className='text'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'></div>
      <input type='text' value={password} className='outline-2px w-full py-5 px-3 mb-4 ' placeholder='Password' readOnly ref={passwordRef}></input>
      <button onClick={copyPasswordToClipboard} className='outline-5px bg-blue-700 text-white px-3 py-0.5 shrink-0 mb-4'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={0} max={20} value={length} className='cursor-pointer' onChange={(e) => {setlength(e.target.value)}} />
          <label>Length: {length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked = {number} id = "numberInput" onChange={() => {
            setnumber((prev) => !prev);
          }}/>
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked = {symbol} id = "symbolinput" onChange={() => {
            setsymbol((prev) => !prev);
          }}/>
          <label>Symbols</label>
        </div>
      </div>
    </>
  )
}

export default App
