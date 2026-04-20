import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asynUpdateUser } from '../store/actions/userAction'

const Cart = () => {

  const users = useSelector((state) => state.userreducer.users)
  const dispatch = useDispatch()

  const IncreasedQuantity = (product) => {

    const copyuser = {
      ...users,
      cart: [...(users.cart || [])]
    }

    const x = copyuser.cart.findIndex(
      (c) => c.products[0].id === product.id
    )

    if (x === -1) return

    copyuser.cart[x] = {
      ...copyuser.cart[x],
      quantity: copyuser.cart[x].quantity + 1
    }

    dispatch(asynUpdateUser(copyuser.id, copyuser))
  }

  const DecreasedQuantity = (product) => {

    const copyuser = {
      ...users,
      cart: [...(users.cart || [])]
    }

    const x = copyuser.cart.findIndex(
      (c) => c.products[0].id === product.id
    )

    if (x === -1) return

    if (copyuser.cart[x].quantity > 1) {
      copyuser.cart[x] = {
        ...copyuser.cart[x],
        quantity: copyuser.cart[x].quantity - 1
      }
    } else {
      copyuser.cart.splice(x, 1)
    }

    dispatch(asynUpdateUser(copyuser.id, copyuser))
  }

  const cartItem = users?.cart?.map((c) => {
    const product = c.products[0]

    return (
      <li key={product.id} className="border p-4 rounded mb-3 shadow">

        <div className='flex justify-between items-center'>

          <div>
            <h2 className='font-semibold'>{product.title}</h2>

            <img
              className='h-[25vh] w-[25vh] rounded object-cover mt-2'
              src={product.img}
              alt={product.title}
            />
          </div>

          <div className='flex items-center gap-4'>
            <button
              className='px-1 py-1 bg-gray-200 rounded active:scale-95 text-gray-800'
              onClick={() => DecreasedQuantity(product)}
            >
              -
            </button>

            <span className='font-bold'>{c.quantity}</span>

            <button
              className='px-1 py-1 bg-gray-200 text-gray-800 rounded active:scale-95'
              onClick={() => IncreasedQuantity(product)}
            >
              +
            </button>
          </div>

        </div>

      </li>
    )
  }) || []

  return (
    <div className='p-5'>
      <h2 className='mb-5 text-xl font-semibold'>Cart Items:</h2>

      {cartItem.length > 0 ? (
        <ul>{cartItem}</ul>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  )
}

export default Cart