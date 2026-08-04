import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  return (
   <div>
      <h1>theme of the website is : {theme} </h1>


      <h1> <Navbar theme={theme} setTheme = {setThemef} /></h1>
   </div>
  )
}

export default App
