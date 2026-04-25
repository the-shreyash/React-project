import { useState } from 'react'

import './App.css'  
import './index.css'

function App() {
  const btnClicked =()=>{
    console.log("btn clicked");
  }

  const inputChange=(elem)=>{
    console.log(elem);
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='' >
        <button onClick={btnClicked} className='btn'>click</button>
        <button onClick={()=>{console.log("hello")}}>shreyash</button>
        <br />
        <input onChange={(elm)=>console.log(elm.target.value)} type="text" 
        placeholder='enter name ' />

        <br />

        <input type="text" name="" id="" placeholder='enter the value'
          onChange={function(elem){
            inputChange(elem.target.value)
          }} 
        />
      </div>
    </>
  )
}

export default App
