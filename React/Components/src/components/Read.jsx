function Read({users}) {
    const user=users;

    const render=user.map((user,idx)=>{
      return(
        <li key={idx}>
          {user.Name}
        </li>
      )
    })
    
  return (
    <div>
        
        <div>
          <h2>Render Name</h2>
        <h2>User:{render} </h2>

      </div>
      
    </div>
  )
}

export default Read