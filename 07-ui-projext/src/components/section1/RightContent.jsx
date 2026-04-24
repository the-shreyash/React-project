import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    
  return (
    <div  id='right' className='h-full  w-2/3  flex justify-between gap-10 overflow-x-auto rounded-4xl'>
        {
            props.users.map(function(elem,idx){
                return <RightCard key ={idx} id = {idx } elem = {elem.img} tag = {elem.tag}/>
            })
        }
         
         

    </div>
  )
}

export default RightContent