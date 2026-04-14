import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Register from '../pages/Register'
import { useSelector } from 'react-redux'
import CreateProducts from '../pages/admin/CreateProducts'
import UpdateProducts from '../pages/admin/UpdateProducts'
import ProductDetails from '../pages/admin/ProductDetails'
import ProfileUser from '../pages/users/ProfileUser'
import PageNotFound from '../pages/PageNotFound'

const Mainroutes = () => {
  const users=useSelector((state)=>state.userreducer.users)
  console.log(users);
  
  return (
    <div>
        <Routes>
            <Route path='/' element={<Products/>}>Home</Route>
            <Route path='/login' element={<Login/>}>Login</Route>
            <Route path='/register' element={<Register/>}>Register</Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/admin/create-product' element={<CreateProducts/>}></Route>
            <Route path='/product/:id' element={<ProductDetails/>}></Route>
            <Route path='/setting' element={<ProfileUser/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    </div>
  )
}

export default Mainroutes