import React from 'react'

const Nav2 = (props) => {
  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>contact </h4>
        <h4>about</h4>
        <h4>feedback</h4> 
        <h4>{props.theme }</h4>
    </div>
  )
}

export default Nav2