import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const navigate=useNavigate()
    const param=useParams();
    console.log(param);
    
    const goback=()=>{
        navigate(-1);
    }

    return (
        <div className='mb-4'>
            <h1 className='text-5xl font-thin mb-4'>{param.name}</h1>
            <h2 className='text-3xl font-thin mb-4'>Product Details...</h2>
            <button className='px-6 py-2 bg-white text-black mt-3 rounded mb-4' onClick={goback}>Go Back</button>
        </div>
    )
}

export default ProductDetails