import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const submitHandler =(e)=>{
    e.preventDefault()
    console.log("form submitted")
  }
  return (
   <>
   <div  >
      <form action="" onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" name="" id="" placeholder='enter your name '/>  
        <input type="text" name="" id=""/>

        <button>submit</button>
      </form>
   </div>
   </>
  )
}

export default App
