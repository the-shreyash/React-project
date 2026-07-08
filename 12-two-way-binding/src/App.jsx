import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const [title, settitle] = useState('shreyash')
  const submitHandler =(e)=>{
    e.preventDefault()
    console.log("form submitted",title)
    
  }
  return (
   <>
   <div  >
      <form action="" onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" name="" id="" placeholder='enter your name ' value={title} onChange={(e)=>{settitle(e.target.value)}} />  
        <input type="text" name="" id=""/>

        <button>submit</button>
      </form>
   </div>
   </>
  )
}

export default App
