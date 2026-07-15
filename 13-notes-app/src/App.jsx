import { useState } from 'react'
import './App.css'
import { X } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)
  const [title, settitle] = useState("")
  const [details, setdetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler =(e)=>{
    e.preventDefault();

    const copyTask = [...task]
    

    copyTask.push({title,details})

    setTask(copyTask)

    
    // console.log(`from submitted by ${title}`)
    // alert(`from is submitted by ${title }`)
    settitle('')
    setdetails('')


  } 

  //function for delete notes

  const deleteNote= (idx)=>{
    console.log("notes deleted")
    const deleteNote = [...task]
    deleteNote.splice(idx,1)
    setTask(deleteNote)
     
  } 

  return (

    <div className=' h-full  bg-black text-white  ' >
      <form action="" className='flex justify-between p-10 items-start flex-col gap-4' 
        onSubmit={(e)=>{submitHandler(e)}}>
        <div className=' flex flex-col  p-10 items-start flex-col gap-4'>

          {/* first intput for heading*/} 
          <input
            type="text"
            placeholder='enter notes heading'
            className='px-5 py-2 w-1/2 border-5 rounded-xl outline-none 
             text-teal-100  w-full' 
            value={title}
            
            onChange={(e)=>{
              settitle(e.target.value)
            }}
          />

            {/* detailed input*/}
             
          <input name=""
            id=""
            type='text'

            placeholder='Enter Details'
            className='px-5 py-2 w-1/2 border-5 rounded-xl outline-none text-teal-100 w-full'
            value ={details}
            
            onChange ={(e) => {
              
              setdetails(e.target.value)
            }}
          />
          

          <button className='bg-white py-5 px-5 w-1/2 rounded-xl text-gray-500 w-full
           active:bg-gray-500'
          >Add note</button>

        </div>
        
      </form> 
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Note</h1>
        <div className="flex flex-wrap items-start gap-5 mt-6 h-full overflow-auto">
        {task.map(function(elem,idx){
          return <div key={idx} className=" relative h-52 w-40 rounded-xl text-black p-4 bg-cover bg-[url('https://img.magnific.com/premium-vector/elegant-brown-aesthetic-note-sheet-document-printable_462511-696.jpg?w=360™')]">
            <h2 className="absolute top-5 right-5  bg-red-400 rounded-full 
              cursor-pointer active:scale-120 " onClick={()=>{
                deleteNote(idx) 
              }}>
              <X size={20} color='#ffffff' strokeWidth={2.75}/>
            </h2>
            <h3 className='leading-tight text-2xl font-bold text-center  '>{elem.title}</h3>
            <p className='mt-4 leading-tight font-medium text-gray-700™'>{elem.details}</p>
          </div>
        })}

        </div>
      </div>

    </div>
  )
}

export default App
