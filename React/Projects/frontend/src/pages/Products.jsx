import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncGetProducts } from '../store/actions/productAction'
import InfiniteScroll from 'react-infinite-scroll-component'

const Products = () => {

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(8);
  const product = useSelector(
    
    (state) => state.productreducer.products
  );

  

  useEffect(() => {
    dispatch(asyncGetProducts());
  }, [dispatch]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setVisible((prev) => prev + 4);
    }, 500);
  };

  return product.length > 0 ? (
    <InfiniteScroll
      dataLength={visible}
      next={fetchMoreData}
      hasMore={visible < product.length}
      loader={<h4 className="text-center">Loading...</h4>}
      endMessage={
        <p className="text-center font-semibold">
          No more products
        </p>
      }
    >
      <div className='grid grid-cols-4 gap-5 p-5'>
        {product.slice(0, visible).map((d) => (
          <div key={d.id} className='bg-gray-200 rounded-xl shadow-md p-3 hover:shadow-lg transition'>
            
            <img
              className='w-full h-40 object-cover rounded-md'
              src={d.img}
              alt={d.title}
            />

            <h1 className='text-black mt-2 font-semibold text-lg'>
              {d.title}
            </h1>

            <h3 className='text-gray-500 text-sm'>
              {d.model}
            </h3>

            <h3 className='text-green-500 font-bold mt-1'>
              ₹{d.price}
            </h3>

            <h4 className='text-sm mt-1 text-gray-400'>
              {d.desc?.slice(0, 40)}...
            </h4>

            <Link
              to={`/product/${d.id}`}
              className='text-blue-500 text-sm mt-2 inline-block'
            >
              View Details →
            </Link>

          </div>
        ))}
      </div>
    </InfiniteScroll>
  ) : (
    "Loading..."
  );
};

export default Products;