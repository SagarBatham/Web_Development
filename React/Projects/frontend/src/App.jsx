import axios from './api/axiosconfig'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'
import { asynccurrentUser } from './store/actions/userAction'

const App = () => {
  const dispatch=useDispatch();
  const state = useSelector((state) => state);

  useEffect(()=>{
    dispatch(asynccurrentUser());
  },[])

  return (
    <div className='text-white font-thin w-screen h-screen bg-gray-800 px-[5%] text-3xl'>
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App