import { useState } from 'react'



function App() {
  const [Nums, setNums] = useState(10)

  function incNum (){
    
    setNums(Nums+1);
  }
  function decNum(){
    setNums(Nums-1)
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

    
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 text-center">
      
      
      <h1 className="text-5xl font-bold mb-8 tracking-wide">
        Count: <span className="text-blue-400">{Nums}</span>
      </h1>

      
      <div className="flex gap-6 justify-center">
        
      
        <button
          onClick={incNum}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-green-400 to-green-600 hover:scale-110 transition-all duration-300 shadow-lg text-xl font-semibold"
        >
          + Increase
        </button>

      
        <button
          onClick={decNum}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-400 to-red-600 hover:scale-110 transition-all duration-300 shadow-lg text-xl font-semibold"
        >
          − Decrease
        </button>

      </div>
    </div>
  </div>
  )
}

export default App
