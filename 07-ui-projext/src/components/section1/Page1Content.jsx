import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
    // console.log(props.users)
  return (
    <div className='py-5 pb-20 h-[90vh] flex items-center gap-1 px-18 '>
        <LeftContent/>
        <RightContent users = {props.users}/>
        
    </div>
  )
}

export default Page1Content