import React from 'react'
import { RiArrowRightLine} from "@remixicon/react";

const RightCardContent = (props) => {
    console.log(props)
  return (
    <div>
        <div className='w-full h-full top-0 absolute p-6 flex flex-col justify-between '>
            <h1 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-medium px-7 py-7'>{props.id+1}</h1>
            <div>
                <p className='text-lg leading-relaxed text-white mb-14  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, consectetur voluptatibus! Sint voluptates odio doloribus culpa adipisci esse explicabo natus!</p>

                <div className='flex justify-between '>
                    <button className='rounded-full bg-blue-400 text-white font-medium px-8 py-3 text-lg '>{props.tag}</button>
                    <RiArrowRightLine className='bg-blue-400 rounded-full text-white font-medium ' />
                </div>  
            </div>
            
             
        </div>
    </div>
  )
}

export default RightCardContent