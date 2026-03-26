import React from 'react'
import { useState } from 'react'

function App() {
  const[username,setName]=useState("Punit");

  const changeName=function changeUsername(){
    if(username=="Punit"){
       setName("Manglu");
    }else{
      setName("Punit")
    }
   
  }
  console.log(username);
  
  

  return (
    <>
    <h1>UserName</h1>
    <h2>{username}</h2>
    <button onClick={changeName}>Change Name</button>
    </>
  )
}

export default App