import axios from '../api/axiosconfig'
import React from 'react'
import { asyncGetProducts } from '../store/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import ProductDetails from './admin/ProductDetails'

const Products = () => {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.productreducer.products)
  const renderRecipes = product.map((d) => {

    return (
      <div key={d.id} className='w-[45vh] h-[30%] border'>
        <h1>Name: <span  className='text-red-400'>{d.title}</span></h1>
        <img className='w-[40vh] object-cover' src={d.img} alt="" />
        <h3>Model: {d.model}</h3>
        <h3>Price: <span className='text-green-400'>{d.price}</span></h3>
        <h4 className='text-lg'>Description: {d.desc?.slice(0,20)}<Link to={`/product/${d.id}`} className='text-blue-500 ml-1'>
            see more
          </Link></h4>
      </div>
    )
  })


  return (
    product.length>0?
    <div className='flex flex-wrap overflow-auto gap-5 w-full h-full'>
      {renderRecipes}
    </div>:"Loading..."
  )
}

export default Products