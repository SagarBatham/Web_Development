import React from 'react'
import { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

function App() {
 
      const [task, settask] = useState([
        { id: 1, title: "Kaam Karo", isCompleted: false }
    ])

  
  
  // console.log(task);


  return (
    <div>
      
      <Create task={task} settask={settask}/>
      <hr />
      <Read task={task} settask={settask}/>      
    </div>
  )
}

export default App