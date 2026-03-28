import { Fragment } from "react";
import "./Read.css"

function Read(props) {
    const task=props.task;
    const settask=props.settask;
    const isCompleted=props.isCompleted;


  const dltTask=(id)=>{
    const UpdateTask=task.filter((t)=>t.id!=id);
    
    settask(UpdateTask)
  }


    const rendertask = task.map(task => {
    return <li key={task.id}>

      {task.title}
      <span onClick={()=>dltTask(task.id)}>{""}| Delete</span>
    </li>
  })

  return (
   <Fragment>
    <h1>Pending Tasks!!</h1>
      <ol>{rendertask}</ol>
   </Fragment>
  )
}

export default Read