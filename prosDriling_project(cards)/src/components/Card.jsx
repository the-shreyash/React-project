import React from 'react'
import { Bookmark, CopyPlusIcon } from 'lucide-react';

const Card = (props) => {
  console.log(props.company)
  

  return (
    <>

   
        <div className="card">
          <div className="top">
            <img src alt="" />
            <button>save <Bookmark /></button>
          </div>
          <div className="center">
              <h3>{props.company.companyName} <span>{props.company.datePosted}</span></h3>
              <h2>{props.company.post}</h2>
              <div className='tag'>
                <h4 >{props.company.tag2}</h4>
                <h4 >{props.company.tag1}</h4>
              </div>
          </div>
          <div className="bottom">
            
            <div>
                <h3>{props.company.pay}</h3>
                <p>{props.company.location}</p>
            </div>
            <div>
                <button>Apply Now</button>
            </div>
              
          </div>
        </div>
    
    </>
  )
}

export default Card
