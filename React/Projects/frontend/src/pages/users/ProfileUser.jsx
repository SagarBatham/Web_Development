import React from 'react'
import { asynccurrentUser, asynclogoutUser, asynDeleteUser, asynUpdateUser } from '../../store/actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ProfileUser = () => {  
  


  const navigate = useNavigate()
  const dispatch = useDispatch();

 
    const{users}=useSelector((state)=>state.userreducer)
    console.log(users);
    
  const {register, handleSubmit, reset} = useForm({
    defaultValues:{
        userName:users?.userName,
        email:users?.email,
        password:users?.password,
    }
  });
  
  
const updateHandler = (data) => {
    if (!users?.id) {
      navigate('/login');
      return;
    }
    const userWithId = { ...data, id: users.id };
    dispatch(asynUpdateUser(users.id, userWithId));
    console.log('Updating user:', userWithId); // Debug
  }

const dltProfile=()=>{
    if (!users?.id) {
      navigate('/login');
      return;
    }
    dispatch(asynDeleteUser(users.id))
    navigate("/login")
}

const logOutUser=()=>{
    if (!users?.id) {
      navigate('/login');
      return;
    }
    dispatch(asynclogoutUser())
    navigate("/login")
}


  return  (
  <div>
       <form className='flex flex-col gap-10 ' onSubmit={handleSubmit(updateHandler)}>
            <input type="text" 
            placeholder='Name'
            {...register("userName")}
            className='border-b outline-0 w-1/3 p-2'
            />
            <input type="text"  
            placeholder='Email'
            {...register("email")}
            className='border-b outline-0 w-1/3 p-2'/>
            
            <input type="password" 
            placeholder='Password'
            {...register("password")}
            className='border-b outline-0 w-1/3 p-2'/>
            
           
             <button className='self-start bg-blue-500 px-3 py-2 rounded'>Update Profile</button>
             <button className='self-start bg-red-500 px-3 py-2 rounded ' onClick={logOutUser}>LogOut User</button>

          <button className='self-start bg-red-800 px-3 py-2 rounded ' onClick={dltProfile}>Delete Profile</button>

        </form>
    </div>
  )

}

export default ProfileUser