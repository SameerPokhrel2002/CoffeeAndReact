import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [color,setColor]=useState("olive");
  

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>

<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
<button className='outline-none px-4 py-1 bg-red-500 rounded-full text-white shadow-lg' onClick={()=>setColor("red")}>Red</button>
<button className='outline-none px-4 py-1 bg-green-500 rounded-full text-white shadow-lg' onClick={()=>setColor("green")}>Green</button>
<button className='outline-none px-4 py-1 bg-blue-500 rounded-full text-white shadow-lg' onClick={()=>setColor("blue")}>Blue</button>
<button className='outline-none px-4 py-1 bg-pink-500 rounded-full text-white shadow-lg' onClick={()=>setColor("pink")}>Pink</button>
<button className='outline-none px-4 py-1 bg-yellow-500 rounded-full text-white shadow-lg' onClick={()=>setColor("yellow")}>Yellow</button>



</div>

</div>


    </div>
  )
}

export default App
