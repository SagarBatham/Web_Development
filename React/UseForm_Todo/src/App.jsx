import React from 'react'
import { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'
import "./index.css"
import { ToastContainer } from 'react-toastify'

function App() {
 


  return (
    <div className='w-screen h-screen flex justify-between bg-gray-800 p-10 text-white'>

      <Create/>
      <hr />
      <Read />     
    </div>
  )
}

export default App