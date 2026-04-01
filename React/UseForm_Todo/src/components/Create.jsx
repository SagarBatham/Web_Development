import { useContext, useState } from "react";
import { Fragment } from "react";
import { nanoid } from 'nanoid'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {todocontext} from '../Wrapper'



function Create() {

    const[task,settask]=useContext(todocontext)
    console.log(task);
    

    const{register,handleSubmit,reset,formState:{errors}}=useForm();




    const submithandler = (data) => {
       data.id=nanoid();
       data.isCompleted=false;
       console.log(data);
       
        
        const copyTodo=[...task]
        copyTodo.push(data)
        settask(copyTodo);
        toast.success("Task Created")

        reset();
        // const newtodo = {
        //     id: nanoid(),
        //     // title,
        //     isCompleted: false,
        // }

        // settitle("")

        // const newtask = [...task];
        // newtask.push(newtodo);
        // settask(newtask)

        // // settask([...task,newtodo])

    }

    return (
        <div className="p-[15px] w-[60%] p-15">
            <h2 className="text-7xl font-thin">Set <span className="text-red-400"> Reminder</span> for <br />Tasks</h2>
            <form onSubmit={handleSubmit(submithandler)}>
                <input type="text" 
                    className="border-b mt-[20px] text-3xl p-2 outline-0"
                    placeholder='Enter a Task'
                    {...register("title",{required:"Title cant be Empty"})}
                />
                {errors && errors.title && errors.title.message &&<small className="text-red-400"><br />{errors.title.message}</small>}
                <br />
                <br />
                <button className="mt-5 px-10 py-2 border text-2xl rounded-md">Create ToDo</button>
            </form>
        </div>
    )
}

export default Create