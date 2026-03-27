import React, { useState } from 'react'

function App() {
  const [name, age] = useState([{
    Name: "Sagar",
    Age: 23,
  }, {
    Name: "Ankur",
    Age: 24,
  }, {
    Name: "Alia",
    Age: 21,
  }])

  const [username, setUsername] = useState("");
  const [userage, setAge] = useState(18)
  const [submittedUser, setSubmittedUser] = useState(null);


  // const eventHandler = (e) => {
  //   console.log(e);
  // }

  
  const preventReload=(e)=>{
    const newUser={username,userage}
    console.log("Form Submitted Succesfully")
    console.log(newUser);
    e.preventDefault();
    setUsername("")
    setAge("")

    setSubmittedUser({username,userage})
  }
  

  return (
    <div>
      <h1>Render Task</h1>
      <form >
        <input
          type="text"
          placeholder='Enter a Name'
          onChange={(e)=>setUsername(e.target.value)}
          value={username}
        />

        <input onChange={(e)=>setAge(e.target.value)}
          type="number"
          placeholder='Enter Age'
          value={userage}
        />
        <button onClick={preventReload}>Submit</button>

      </form>

      <hr />


      {submittedUser && (
        <div>
        <h2>User:{submittedUser.username} </h2>
        <h2>Age:{submittedUser.userage}</h2>
      </div>
      )}
      

      
    </div>

  )
}

export default App