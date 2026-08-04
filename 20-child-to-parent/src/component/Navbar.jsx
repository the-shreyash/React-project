import React from 'react'

const Navbar = (props) => {
    
    console.log(props.theme)

  return (
    <div>
      <div>Navbar : {props.theme}</div>
      <button onClick={()=>{
        // now child can send data to parent this is kind of trick 
        props.setTheme('dark') 
      }}>change theme</button>
    </div>
    

  )
}
  
export default Navbar