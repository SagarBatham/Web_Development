import React, { useEffect, Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asynccurrentUser } from '../store/actions/userAction'
import AuthRoutes from '../components/AuthRoutes'

const Login = lazy(() => import('../pages/Login'))
const Products = lazy(() => import('../pages/Products'))
const Register = lazy(() => import('../pages/Register'))
const CreateProducts = lazy(() => import('../pages/admin/CreateProducts'))
const ProductDetails = lazy(() => import('../pages/admin/ProductDetails'))
const ProfileUser = lazy(() => import('../pages/users/ProfileUser'))
const Cart = lazy(() => import('../pages/Cart'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))

const Mainroutes = () => {

  const dispatch = useDispatch();

  const { users, isLoading } = useSelector(
    (state) => state.userreducer
  );

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Routes>

      <Route path='/' element={<Products />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/products' element={
        <AuthRoutes>
          <Products />
        </AuthRoutes>
      } />

      <Route path='/admin/create-product' element={
        <AuthRoutes>
          <CreateProducts />
        </AuthRoutes>
      } />

      <Route path='/product/:id' element={<ProductDetails />} />

      <Route path='/setting' element={
        <AuthRoutes>
          <ProfileUser />
        </AuthRoutes>
      } />

      <Route path='/cart' element={<Cart />} />

      <Route path='*' element={<PageNotFound />} />

    </Routes>
  )
}

export default Mainroutes