import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { asynccurrentUser, asynUpdateUser } from '../store/actions/userAction';

const AuthRoutes = ({ children }) => {

  const { users, isLoading } = useSelector(
    (state) => state.userreducer
  );

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(asynccurrentUser());
  },[])

  if (isLoading) {
    return <h1>Loading...</h1>;
  }


  return children;
};

export default AuthRoutes;