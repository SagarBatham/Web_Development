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
        <Fragment>
            <h2>To Do List</h2>
            <form onSubmit={submithandler}>
                <input type="text"
                    placeholder='Enter a Task'
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                />
                <br />
                <br />
                <button>Create ToDo</button>
            </form>
        </Fragment>
    )
}

export default Create