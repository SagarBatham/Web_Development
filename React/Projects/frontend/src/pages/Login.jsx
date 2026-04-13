import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';
import { asyncloginUser } from '../store/actions/userAction';
import { useDispatch } from 'react-redux';

const Login = () => {

  const {register,handleSubmit,reset}=useForm();
  const dispatch=useDispatch();
  const loginHandler=(user)=>{
    dispatch(asyncloginUser(user));
    console.log(user);
    reset()
  }
  return (
    <div>
      <form className='flex flex-col w-1/3 gap-3' onSubmit={handleSubmit(loginHandler)}>
        <input className='outline-0 border-b p-2 text-4xl'
         type="email" 
          {...register("email")}
        placeholder='Enter your Email'/>

        <input className='outline-0 border-b p-2 '
         type="password" 
          {...register("password")}
        placeholder='*********'/>
        <button className='px-2 py-1 bg-blue-400 w-1/2 rounded'>Login</button>
        <p className='mt-2'>
          Don't have an account?<Link to="/register" className='text-blue-600'>Register</Link>
          </p>
      </form>
    </div>
  )
}

export default Login