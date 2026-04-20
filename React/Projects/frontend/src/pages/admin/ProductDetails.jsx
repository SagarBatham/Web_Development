import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { asyncDeleteProduct, asyncGetProducts, asyncUpdateProduct } from '../../store/actions/productAction'
import { useForm } from 'react-hook-form'
import { asynUpdateUser } from '../../store/actions/userAction'

const ProductDetails = () => {

  const { id } = useParams()

  const {
    userreducer: { users },
    productreducer: { products }
  } = useSelector((state) => state)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const myProduct = products?.find((pro) => pro.id == id)

  useEffect(() => {
    dispatch(asyncGetProducts())
  }, [dispatch])

  const AddtoCartHandler = (product) => {

    const copyUser = {
      ...users,
      cart: [...(users.cart || [])]
    }

    const x = copyUser.cart.findIndex(
      (c) => c.products[0].id === product.id
    )

    if (x === -1) {
      copyUser.cart.push({
        products: [product],
        quantity: 1
      })
    } else {
      copyUser.cart[x] = {
        ...copyUser.cart[x],
        quantity: copyUser.cart[x].quantity + 1
      }
    }
    navigate("/cart")

    dispatch(asynUpdateUser(copyUser.id, copyUser))
  }

  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    if (myProduct) {
      reset({
        title: myProduct.title,
        model: myProduct.model,
        price: myProduct.price,
        img: myProduct.img,
        desc: myProduct.desc
      })
    }
  }, [myProduct, reset])

  const updateProduct = (product) => {
    dispatch(asyncUpdateProduct(id, product))
  }

  const deleteProduct = () => {
    dispatch(asyncDeleteProduct(id))
    navigate("/products")
  }

  return myProduct ? (
    <div className='p-5'>

      <div className='flex gap-10'>
        
        <img
          className='h-[50vh] object-cover rounded-2xl'
          src={myProduct.img}
          alt={myProduct.title}
        />

        <div>
          <h1 className='text-4xl font-semibold'>{myProduct.title}</h1>

          <h2 className='text-2xl text-green-500 mt-2'>
            ₹{myProduct.price}
          </h2>

          <p className='mt-3'>{myProduct.desc}</p>

          <div className='flex gap-3 mt-5'>

            <button
              className='px-4 py-2 bg-blue-500 text-white rounded hover:scale-105 active:scale-95 transition'
              onClick={() => AddtoCartHandler(myProduct)}
            >
              Add to Cart
            </button>

          </div>
        </div>

      </div>

      <hr className='my-8' />

      {users && users.isAdmin && (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(updateProduct)}>

          <input {...register("title")} className='border p-2 w-1/3' />
          <input {...register("model")} className='border p-2 w-1/3' />
          <input {...register("price")} className='border p-2 w-1/3' />
          <input {...register("img")} className='border p-2 w-1/3' />
          <textarea {...register("desc")} className='border p-2 w-1/3' />

          <button className='bg-blue-500 text-white px-4 py-2 rounded w-fit'>
            Update Product
          </button>

          <button
            type="button"
            onClick={deleteProduct}
            className='bg-red-500 text-white px-4 py-2 rounded w-fit'
          >
            Delete Product
          </button>

        </form>
      )}

    </div>
  ) : "Loading..."
}

export default ProductDetails