import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Product from '../components/Product'
import Service from '../components/Service'
import About from '../components/About'
import ProductDetails from '../components/ProductDetails'

const Mainroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
        <Route path="/product/detail/:name" element={<ProductDetails />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  )
}

export default Mainroute