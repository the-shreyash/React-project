import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {
    console.log(props.theme)


    // now we using context api concept
 const data = useContext(ThemeDataContext)
   console.log(data)
  return (
    <div className='nav'>
    {/* here we use context api */}
        <h2>{data}</h2>

        {/* here the the props driling concept  */}
        <Nav2 theme= {props.theme}/>
    </div>
  )
}

export default Navbar