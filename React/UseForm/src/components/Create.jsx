import { useState } from "react";
import { Fragment } from "react";
import { nanoid } from 'nanoid'


function Create(props) {

    const task=props.task;

    const settask=props.settask;

    const [title, settitle] = useState("")



    const submithandler = (e) => {
        e.preventDefault();

        const newtodo = {
            id: nanoid(),
            title,
            isCompleted: false,
        }

        settitle("")

        const newtask = [...task];
        newtask.push(newtodo);
        settask(newtask)

        // settask([...task,newtodo])

    }

    return (
        <div className="p-[15px] w-[60%] p-15">
            <h2 className="text-7xl font-thin">Set <span className="text-red-400"> Reminder</span> for <br />Tasks</h2>
            <form onSubmit={submithandler}>
                <input type="text" className="border-b mt-[20px] text-3xl p-2 outline-0"
                    placeholder='Enter a Task'
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                />
                <br />
                <br />
                <button className="mt-5 px-10 py-2 border text-2xl rounded-md">Create ToDo</button>
            </form>
        </div>
    )
}

export default Create