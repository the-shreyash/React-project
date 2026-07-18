import { useState } from 'react'

import axios, { Axios } from 'axios'
import { Axis3D } from 'lucide-react'


function App() {
  

  //-------api data get by fetch -----------
  {/*const  getData = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    
    const data = await response.json()
    console.log(data )

  }*/}


  //----------now using axios----------
  //  const getData = async()=>{
  //    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //    console.log(response.data)
  //  }

  // const getData = async () => {
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(data)

    
  // }


  const [data, setdata] = useState([])

const getImg = async()=>{
  const response = await axios.get('https://picsum.photos/v2/list')
  console.log(response.data)

  setdata(response.data)
}
  
  return (
   <>
    {/* <button onClick={getData}>Data</button> */}
    <button onClick={getImg}>img list</button>

    <div>
      {data.map(function(elem,idx){
        return(
          <div>
            <h3>hello {elem.url}</h3>
            
          </div>
          
        )
      })}
    </div>
   </> 
  )
}

export default App
