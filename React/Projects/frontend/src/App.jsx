import axios from './api/axiosconfig'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'
import { asynccurrentUser, asynUpdateUser } from './store/actions/userAction'
import { asyncGetProducts } from './store/actions/productAction'

const App = () => {
  const dispatch=useDispatch();
  const state = useSelector((state) => state);

  useEffect(()=>{
    dispatch(asynccurrentUser());
    dispatch(asyncGetProducts())
  },[])

  return (
    <div className='text-white font-thin w-screen h-screen bg-gray-800 px-[5%] text-3xl overflow-auto'>
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App