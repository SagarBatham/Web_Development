import React from 'react'
import FaceExpression from './components/FacialExpression'
import Songs from './components/Songs'

import "/index.css"
import { useState } from 'react'

const App = () => {
  const [songsData, setsongsData] = useState([
    ])
  return (
    <div className='appcss'>
      <FaceExpression setsongsData={setsongsData}/>
      <Songs songsData={songsData}/>
    </div>
  )
}

export default App