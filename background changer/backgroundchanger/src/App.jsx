import { useState } from 'react'


function App() {
  const [color, setcolor] = useState('orange')
  
  return (
    //console.log(color);
    <>
    <div className="w-full h-screen" 
    style={{backgroundColor: color}}
    >
      <h1 className='fixed flex flex-wrap justify-center bottom-100 inset-x-50 '>The color is: {color}</h1>
      
      
      <div className= "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setcolor("lavender")} className='outline-none px-4 py-2 rounded-full text-dark-grey shadow-lg' style={{backgroundColor: 'lavender'}}>Lavender</button>
          <button onClick={() => setcolor("black")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: 'black'}}>Black</button>
          <button onClick={() => setcolor("yellow")} className='outline-none px-4 py-2 rounded-full text-black shadow-lg' style={{backgroundColor: 'yellow'}}>Yellow</button>
          <button onClick={() => setcolor("blue")} className='outline-none px-4 py-2 rounded-full text-pink shadow-lg' style={{backgroundColor: 'blue'}}>Blue</button>
          <button onClick={() => setcolor("green")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: 'green'}}>Green</button>
          <button onClick={() => setcolor("pink")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: 'pink'}}>Pink</button>
          <button onClick={() => setcolor("skyblue")} className='outline-none px-4 py-2 rounded-full text-black shadow-lg' style={{backgroundColor: 'skyblue'}}>Sky Blue</button>
          <button onClick={() => setcolor("brown")} className='outline-none px-4 py-2 rounded-full text-blue shadow-lg' style={{backgroundColor: 'brown'}}>Brown</button>
          <button onClick={() => setcolor("grey")} className='outline-none px-4 py-2 rounded-full text-yellow shadow-lg' style={{backgroundColor: 'grey'}}>Grey</button>
          <button onClick={() => setcolor("orange")} className='outline-none px-4 py-2 rounded-full text-pink shadow-lg' style={{backgroundColor: 'orange'}}>Orange</button>
          <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' style={{backgroundColor: 'white'}}>White</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
