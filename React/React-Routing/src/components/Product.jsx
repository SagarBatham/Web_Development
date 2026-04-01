import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product() {

  const navigate=useNavigate();
  const navigatehandler=(name)=>{
    console.log(name);
    
    navigate(`/product/detail/${name}`)
  }

  return (
    <div>
      <h1 className='text-5xl font-thin'>Product Details</h1>
      <div className='mt-8'>
        <h2 className='text-2xl font-thin mt-2'>Product 1</h2>
        <button className='px-6 py-2 bg-white text-black mt-3 rounded' onClick={()=>navigatehandler("Product 1")}>See Details</button>
      </div>
      <div className='mt-8'>
        <h2 className='text-2xl font-thin mt-2'>Product 2</h2>
        <button className='px-6 py-2 bg-white text-black mt-3 rounded' onClick={()=>navigatehandler("Product 2")}>See Details</button>
      </div>
      <div className='mt-8'>
        <h2 className='text-2xl font-thin mt-2'>Product 3</h2>
        <button className='px-6 py-2 bg-white text-black mt-3 rounded' onClick={()=>navigatehandler("Product 3")}>See Details</button>
      </div>
      </div>
  )
}

export default Product