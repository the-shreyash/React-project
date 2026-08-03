import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home  from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Navbar from './component/Navbar.jsx'



function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>

    <Navbar/>
    <h2>this is navbar</h2>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pages/contact' element= {<Contact/>} />
      <Route path='/about' element={<About/>}></Route>
    </Routes>

      <h2>this is footer</h2>
    </>
    
  )
}

export default App

