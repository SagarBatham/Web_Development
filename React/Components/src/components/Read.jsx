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
          <ol>Render Name</ol>
        <ol>User:{render} </ol>

      </div>
      
    </div>
  )
}

export default Read