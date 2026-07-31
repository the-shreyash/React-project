import { useEffect, useState } from 'react'
import axios from 'axios'



function App() {
  const [count, setCount] = useState(0)
  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)
   

  const getData =  async()=>{
    const response =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`) 
    // console.log(response)
    
    setUserData(response.data)
    // console.log(response.data);
  }

  useEffect(function(){
    getData()
  },[index])


  let printUserData = "Loading..."

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return  
        <div key={idx}>
        <a href={elem.url} target="_blank" rel="noopener noreferrer">
          <img className='h-30 w-40 rounded-xl' src={elem.download_url} alt="" srcset="" />
          <div className=''>{elem.author}</div>
        </a>
        
        </div>
      
    })
  }

  return (
    <div className='bg-black h-screen text-white overflow-auto '>
      
    <Card/>
    </div>
  )
}

export default App
