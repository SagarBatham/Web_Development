import React, { useState } from 'react'
function Create({ setSubmittedUser }) {
    console.log({ setSubmittedUser });


    const [username, setUsername] = useState("");
    const [userage, setAge] = useState(18)


    const preventReload = (e) => {
        const newUser = { username, userage }
        console.log("Form Submitted Succesfully")
        console.log(newUser);
        e.preventDefault();
        setUsername("")
        setAge("")

        setSubmittedUser({ username, userage })
    }
    return (
        <>
            <h1>Register User</h1>
            <form >
                <input
                    type="text"
                    placeholder='Enter a Name'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />

                <input onChange={(e) => setAge(e.target.value)}
                    type="number"
                    placeholder='Enter Age'
                    value={userage}
                />
                <button onSubmit={preventReload}>Submit</button>

            </form>
        </>
    )
}

export default Create