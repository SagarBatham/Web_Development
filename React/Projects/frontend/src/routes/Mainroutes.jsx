import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Register from '../pages/Register'
import { useSelector } from 'react-redux'
import CreateProducts from '../pages/admin/CreateProducts'
import UpdateProducts from '../pages/admin/UpdateProducts'

const Mainroutes = () => {
  const user = useSelector((state) => state.userreducer.users);
  console.log('Users:', user);
  
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            <Route path='/products' element={<Products/>}>Products</Route>
            <Route path='/login' element={<Login/>}>Login</Route>
            <Route path='/register' element={<Register/>}>Register</Route>

            <Route path='/admin/create-product' element={<CreateProducts/>}></Route>
            <Route path='/admin/update-product/:id' element={<UpdateProducts/>}></Route>
        </Routes>
    </div>
  )
}

export default Mainroutes