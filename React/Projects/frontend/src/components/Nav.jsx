import React from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  const user = useSelector((state) => state.userreducer.users);
  console.log('Users:', user);
  return (
    <nav className='flex justify-center items-center text-2xl gap-x-10 p-2 mb-10'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        {user?(<>
         <NavLink to="/admin/create-product">Create Product</NavLink>
        </>)
        :
        (<>
        <NavLink to="/login">Login</NavLink>
        </>)}
        
       

    </nav>
  )
}

export default Nav