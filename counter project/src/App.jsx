import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [value, setValue] = useState(5);


  function addValue(){
    if(value<20){
      value++;
    setValue(value);
    }
    
   
  }
  function subValue(){
    if(value>0){
      value--;
    setValue(value);
    }
    a
  }

  return (
    <>
     <h1>chai aur react</h1> 
     <h2>counter value : {value}</h2>
     <button
      style={{marginRight:'6px'}}
      onClick={addValue}
      >add value</button>
     <button onClick={subValue}>decrease value</button>
        
    </>
  )
}

export default App
