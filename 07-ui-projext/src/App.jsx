import React from 'react'
import Section1 from './components/section1/Section1.jsx'
import Section2  from './components/section2/Section2.jsx'

const App = () => {
  const users = [
    {
      img:"https://images.unsplash.com/photo-1555421689-43cad7100750?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"satified"
    },
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Underserved"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"underbank"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"underbank"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"underbank"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"underbank"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"underbank"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"underbank"
    },
    
    
  ]

  return (
    <>
    <Section1 users = {users}/>

    
    <Section2/>


    </>
    
  )
}

export default App
