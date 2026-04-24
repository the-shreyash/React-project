import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  // console.log(props );
  
  return (
    <div className='h-screen w-full "bg-white  rounded-lg px-6 py-8 ring shadow-xl ring-gray-900"'>
        <Navbar/>
        <Page1Content users ={props.users} />
    </div>

  )
}

export default Section1