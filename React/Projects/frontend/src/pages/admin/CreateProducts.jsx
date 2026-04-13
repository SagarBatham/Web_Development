import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import { useForm } from 'react-hook-form'

const CreateProducts = () => {
    const{register,handleSubmit,reset}=useForm();
    const newProduct=(product)=>{
        product.id=nanoid();
        console.log(product);
        
    }
    const data={
        "id": "4",
    "title": "MacBook Air M2",
    "model": "macbook-air-m2",
    "price": 119999,
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    "description": "Apple MacBook Air powered by M2 chip with ultra-thin design and high performance."
    }
  return (
    <div>
        <form className='flex flex-col gap-10 ' onSubmit={handleSubmit(newProduct)}>
            <input type="text" 
            placeholder='Enter Title'
            {...register("title")}
            className='border-b outline-0 w-1/3 p-2'
            />
            <input type="text"  
            placeholder='Enter Model No.'
            {...register("model")}
            className='border-b outline-0 w-1/3 p-2'/>
            
            <input type="text" 
            placeholder='Enter Price Details'
            {...register("price")}
            className='border-b outline-0 w-1/3 p-2'/>
            
            <input type="url" 
            placeholder='Product Image link'
            {...register("img")}
            className='border-b outline-0 w-1/3 p-2'/>

            <textarea type="text" 
            placeholder='Description'
            {...register("desc")}
            className='border-b outline-0 w-1/3'/>
            
             <button className='self-start bg-blue-500 px-4 py-2 rounded'>Create Product</button>
        </form>
    </div>
  )
}

export default CreateProducts