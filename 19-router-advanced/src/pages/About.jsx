import React from 'react'
import { useNavigate } from 'react-router-dom'
import Home from './Home'

const About = () => {
  let navigate = useNavigate()

  const btnClick = ()=>{
    navigate('/')
  }

  return (
    <div>
        <button onClick={btnClick} className='bg-red-100 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>back to home page</button>
        <button onClick={()=>{
          navigate(-1)
        }} className='bg-red-100 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>back</button>

        <h1>about page </h1>
    </div>
  )
}

export default About