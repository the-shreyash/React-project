import { useState } from 'react'
import Header from './component/Header/Header'
import Button from './component/Button/Button'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Button/>
    </>
  )
}

export default App
