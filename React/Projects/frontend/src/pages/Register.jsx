import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { asyncregisterUser } from '../store/actions/userAction';
import {useDispatch} from 'react-redux'

const Register = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
   const {register,handleSubmit,reset}=useForm();
  const registerHandler=(user)=>{
    user.id=nanoid();
    user.isAdmin=false
    user.cart=[]
    dispatch(asyncregisterUser(user));
    console.log(user);
    navigate("/login")
  }

  return (
    <div>
       <form className='flex flex-col w-1/3 gap-3' onSubmit={handleSubmit(registerHandler)}>
        <input className='outline-0 border-b p-2 text-4xl'
         type="userName"
          {...register("userName")} 
        placeholder='Enter Name'/>

        <input className='outline-0 border-b p-2 text-4xl'
         type="email" 
          {...register("email")}
        placeholder='Enter your Email'/>

        <input className='outline-0 border-b p-2 '
         type="password" 
          {...register("password")}
        placeholder='*********'/>
        <button className='px-2 py-1 bg-blue-400 w-1/2 rounded'>Register</button>
        <p className='mt-2'>
          Already have an account?<Link to="/login" className='text-blue-600'>Login</Link>
          </p>
      </form>
    </div>
  )
}

export default Register