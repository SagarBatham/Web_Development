import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../index.css'

function Nav() {
    return (
        <div className='flex justify-center gap-5 p-3 text-2xl'>
            <NavLink to="/" className={(e)=>(e.isActive ?"text-red-400":"")}>Home</NavLink >
            <NavLink to="/product" className={(e)=>(e.isActive ?"text-red-400":"")}>Product</NavLink >
            {/* <NavLink to="/product/detail">Product Details</NavLink> */}
            <NavLink to="/service" className={(e)=>(e.isActive ?"text-red-400":"")}>Service</NavLink >
            <NavLink to="/about" className={(e)=>(e.isActive ?"text-red-400":"")}>About</NavLink >
    </div>
    )
}

export default Nav