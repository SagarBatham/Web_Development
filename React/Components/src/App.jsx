import React, { useState } from 'react'
import Create from './components/Create';
import Read from './components/Read';

function App() {
    const [submittedUser, setSubmittedUser] = useState(null);

  const [name, setName] = useState([{
    Name: "Sagar",
    Age: 23,
  }, {
    Name: "Ankur",
    Age: 24,
  }, {
    Name: "Alia",
    Age: 21,
  }])

  const adduser=(newUser)=>{
    setName([...name, { Name: newUser.username, Age: newUser.userage }]);
  }

  return (
    <div>
    
      <Create setSubmittedUser={adduser} />
      <hr />
      <Read users={name} />
    </div>

  )
}

export default App