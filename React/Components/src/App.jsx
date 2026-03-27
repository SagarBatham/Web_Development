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

  return (
    <div>
    
      <Create setSubmittedUser={setSubmittedUser} />
      <hr />
      <Read users={name} />
    </div>

  )
}

export default App