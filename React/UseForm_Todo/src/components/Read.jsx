import { useContext } from "react";
import "./Read.css";
import { toast } from "react-toastify";
import {todocontext} from '../Wrapper'


function Read() {
  
  const a=useContext(todocontext);
  console.log(a);
  
const[task,settask]=useContext(todocontext);

  const dltTask = (id) => {
    const UpdateTask = task.filter((t) => t.id !== id);
    settask(UpdateTask);
    toast.error("Todo Deleted")

  };

  const rendertask = task.map((t) => {
    return (
      <li key={t.id} className="mb-4 flex items-center bg-gray-900 rounded justify-between p-3 font-thin">

        <span className="text-lg p-2 rounded text-m">
          {t.title}
        </span>
        <span
          onClick={() => dltTask(t.id)}
          className="text-sm border border-black px-3 py-2 rounded text-red-600 cursor-pointer hover:bg-red-100 ml-3 font-bold"
        >
          Delete
        </span>

      </li>
    );
  });

  return (
    <div className="p-4 w-[40%]">
      <h1 className="text-4xl mb-6">
        <span className="text-red-400 text-6xl ml-5">Pending</span> Tasks!!
      </h1>

      <ol className="list-decimal pl-6">{rendertask}</ol>
    </div>
  );
}

export default Read;