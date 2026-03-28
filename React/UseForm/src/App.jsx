import React from 'react'
import { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'
import "./index.css"
import { ToastContainer } from 'react-toastify'

function App() {
 
      const [task, settask] = useState([
        { id: 1, title: "Kaam Karo", isCompleted: false }
    ])

  
  // console.log(task);


  return (
    <div className='w-screen h-screen flex justify-between bg-gray-800 p-10 text-white'>

      <Create task={task} settask={settask}/>
      <hr />
      <Read task={task} settask={settask}/> 
      <ToastContainer position='top-center'/>     
    </div>
  )
}

export default App