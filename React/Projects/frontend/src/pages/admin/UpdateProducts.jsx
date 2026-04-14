import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateProducts = () => {
  const param=useParams()
  console.log(param);
  
  return (
    <div>UpdateProducts</div>
  )
}

export default UpdateProducts