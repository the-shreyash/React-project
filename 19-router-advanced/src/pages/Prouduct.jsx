import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Prouduct = () => {
  return (
    <div>
        <h1>prouduct page</h1>
        <Link to='/men'>Men</Link>

      <Outlet />
    </div>
    
  )
}

export default Prouduct