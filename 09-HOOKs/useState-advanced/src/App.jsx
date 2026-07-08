import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[num,setNum] = useState({user:"shreyas",age:20})

  const btnClicked =()=>{
    // const newNum = {...num}
    // newNum.user = "suyash"
    // setNum(newNum) 

    setNum(prev=>({...prev,user:"suyash "}))
  }
  const [inc ,setInc] = useState(10);

  const Increase =()=>{ 
    setInc(prev => (prev+1))
    setInc(prev => (prev+1))
    setInc(prev => (prev+1))
    setInc(prev => (prev+1))
  }
  return (
    <>
      <div>    
        <h1>{num.user},{num.age}</h1>
        <button onClick={btnClicked}>click</button>

        <br />

        <h1>count:{inc} </h1>
        <button onClick={Increase}>Increase</button>
      </div>
    </>
  )
}

export default App
