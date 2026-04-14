import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { asyncCreateProducts, asyncDeleteProduct, asyncGetProducts, asyncUpdateProduct } from '../../store/actions/productAction';
import { useForm } from 'react-hook-form';

const ProductDetails = () => {
  const param = useParams()
  
  const products = useSelector((state) => state.productreducer.products)
  const users=useSelector((state)=>state.userreducer.users)
  console.log(users);
  
  const myProduct = products? products.find((pro) => pro.id == param.id):""
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetProducts(param.id));
  }, []);
  
  const {register, handleSubmit, reset} = useForm({
    defaultValues: {
     title: myProduct?.title,
     model: myProduct?.model,
     price: myProduct?.price,
     img: myProduct?.img,
     desc: myProduct?.desc
    }
  });
  
  const updateProduct = (product) => {
    console.log(product);
    dispatch(asyncUpdateProduct(param.id, product)); 
  }

  const deleteProduct=()=>{
    dispatch(asyncDeleteProduct(param.id));
    navigate("/products")
  }

  return myProduct ? (
    <div className='s'>
    <div className='w-full flex'>
      <img className='w-1/2 h-1/2 object-cover' src={myProduct.img} alt="" />
      <div className='px-3 w-1/2 h-1/2'>
         <h1 className='font-thin text-5xl'>{myProduct.title}</h1>
         <h2 className='mb-5 text-2xl text-green-400'>{myProduct.price}</h2>
          <p className='mb-5'>{myProduct.desc}</p>
          <button>Add to Cart</button>
      </div>
    </div>
    <hr />
    {users && users?.isAdmin &&
    <form className='flex flex-col gap-10 ' onSubmit={handleSubmit(updateProduct)}>
            <input type="text" 
            placeholder='Enter Title'
            {...register("title")}
            className='border-b outline-0 w-1/3 p-2'
            />
            <input type="text"  
            placeholder='Enter Model No.'
            {...register("model")}
            className='border-b outline-0 w-1/3 p-2'/>
            
            <input type="text" 
            placeholder='Enter Price Details'
            {...register("price")}
            className='border-b outline-0 w-1/3 p-2'/>
            
            <input type="url" 
            placeholder='Product Image link'
            {...register("img")}
            className='border-b outline-0 w-1/3 p-2'/>

            <textarea type="text" 
            placeholder='Description'
            {...register("desc")}
            className='border-b outline-0 w-1/3'/>
            
             <button className='self-start bg-blue-500 px-3 py-2 rounded'>Update Product</button>
          <button className='self-start bg-red-500 px-3 py-2 rounded ' onClick={deleteProduct}>Delete Product</button>
        </form>
}
       
    </div>
  ) : (
    "Loading..."
  )
}

export default ProductDetails
