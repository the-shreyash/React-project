import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)

  useEffect(function(){
    console.log('use effect is running..')
  },[num2,num]) // here in [] this bracket written things know as depedencies

  return (
    <>
      <div>
        <h1>value of num is :{num}</h1>
        <h1>value of num2 is:{num2}</h1>
        
        <button onClick={()=>{
          setNum(num+1)
          // setNum2(num2+10)
          }}>btn</button>
      </div>
    </>
    
  )
}

export default App


//1. useEffect used when state would changing 
 
{/*2. use dependencie use array with useEffect kyu ki ye tbhi chalna chaiye jb 
  ham chalna chahe randomly na chale har state change hone pr */}

  //3. useEffect used when we have run things in side stack  