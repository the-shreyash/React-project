import { Contact } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-900  justify-between'>
      <h2 className='font-bold size-2'>shreyash</h2>
      <div className='flex gap-8'>

        <Link to='/ '>Home</Link>
        <Link to='about'>about</Link>
        <Link to='contact'>contact</Link>
        <Link to='product'>product</Link>


      </div>
    </div>
  )
}

export default Navbar
  