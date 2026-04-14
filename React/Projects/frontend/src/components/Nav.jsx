import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { asynclogoutUser } from '../store/actions/userAction';

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userreducer.users);
  
  return (
    <nav className='flex justify-center items-center text-2xl gap-x-10 p-2 mb-10'>
      <NavLink to="/">Home</NavLink>
      {user && user?.isAdmin && <NavLink to="/admin/create-product">Create Product</NavLink>}
      <NavLink to="/products">Products</NavLink>
      {!user ? (
        <NavLink to="/login">Login</NavLink>
      ) : (
        <>
            <NavLink to="/setting">Settings</NavLink>
          <button 
            onClick={async () => {
              await dispatch(asynclogoutUser());
              navigate('/login');
            }}
            className="bg-red-500 px-4 py-1 rounded text-white hover:bg-red-600"
          >
            Logout
          </button>
        </>
      )}
    </nav>
  )
}

export default Nav