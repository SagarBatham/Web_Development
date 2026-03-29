import { createContext, useState } from "react";


export const todocontext=createContext(null)

function Wrapper(props) {
  

    const [task, settask] = useState([
        { id: 1, title: "Kaam Karo", isCompleted: false }
    ])
  console.log(props.children);
  
  

  return (
    <div><todocontext.Provider value={[task, settask]}>
      {props.children}
      </todocontext.Provider></div>
  )
}

export default Wrapper