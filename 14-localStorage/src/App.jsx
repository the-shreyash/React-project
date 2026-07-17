import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // localStorage.clear();
  // sessionStorage.clear();

  // localStorage.setItem('user','shryash') //data store in localStorage in the form of the key value pair
  // const user = localStorage.getItem("user") //only pass key 
  // console.log(user)

  // localStorage.removeItem('user')

  // const objUser = {
  //   user: "shryash",
  //   age :20,
  //   location:"delhi"
  // }
   
  // localStorage.setItem('user',JSON.stringify(objUser))

  const getUser= JSON.parse(localStorage.getItem('user'))

  console.log(getUser)
  



 
 
  



  return (
    <>
      <h1>shryash</h1>
    </>
  )
}

export default App
