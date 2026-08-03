
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>about</Link>
        <Link to={'contact'}>contact</Link>
        <Link to={'/feeback'}>feedback</Link>
    </div>
  )
}

export default Navbar