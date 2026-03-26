import React from 'react'

function App() {
  const profiles = [{ Name: 'Harry', Age: 23 },
  { Name: "John", Age: 24 },
  { Name: "Puppy", Age: 25 }];

  const updateData = profiles.map((profile, index) => {
    return (<li key={index}>
      <span>Name:{profile.Name}</span><br />
      <small>Age:{profile.Age}</small>
    </li>)
  });


  return (
    <div>
      <h1>Rendering Profiles</h1>
      <ol>{updateData}</ol>
    </div>
  )
}

export default App

let arr=[2,3,4,5,6].map((ele)=>{
  return ele+2;
})

console.log(arr);
