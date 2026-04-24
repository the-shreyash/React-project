import React from 'react'
import { RiArrowRightUpLine} from "@remixicon/react";
import HeroText from './HeroText';


const LeftContent = () => {
  return (
    <div className='h-full w-1/3  flex flex-col justify-between '>
        <HeroText/>
        <div>
            <RiArrowRightUpLine size={100} />
        </div>
    </div>
  )
}

export default LeftContent