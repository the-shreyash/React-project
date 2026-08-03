import { useState } from 'react'
import Navbar from './commponent/Navbar'
import Footer from './commponent/Footer'
import Home from './pages/Home'
import Prouduct from './pages/prouduct'
import About from './pages/About'
import { Routes,Route } from 'react-router-dom'
import NotFound from './pages/NotFound' 
import  Contact  from './pages/Contact'
import Men from './pages/Men'
import Courses from './pages/courses'
import CoursesDetails from './pages/CoursesDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-black text-white'>
      
      <Navbar/>
      <Routes>
        <Route path ='/' element ={<Home/>} >
          
        </Route>
        <Route path ='/about' element ={<About/>} ></Route>
        <Route path ='/product' element ={<Prouduct/>} >
          <Route path='men' element={<Men />} />

        </Route>
       
       <Route path='/courses' element={<Courses/>} />

       {/* dyanmic routing    */}
       <Route path='/courses/:id' element={<CoursesDetails/>}/>

        <Route path='/contact' element={<Contact/>}></Route>
        <Route path ='*' element ={<NotFound/>} ></Route>

      </Routes>

      <Footer/>
    </div>
  )
}

export default App
   