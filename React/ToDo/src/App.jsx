import React from 'react'
import { useState } from 'react'

function App() {
  const [task, settask] = useState([
    { id: 1, title: "Kaam Karo", isCompleted: false }
  ])

  const [title, settitle] = useState("")

  const [checkbox, setcheckbox] = useState(true)

  const [gender, setgender] = useState("Female")

  const[city,setcity]=useState("mumbai")


  return (
    <div>
      <h2>To Do List</h2>
      <form>
        <input type="text"
          placeholder='Enter a Task'
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />
        <br />
        <br />
        <input type="checkbox" id='ch'
          onChange={(e) => { setcheckbox(e.target.checked) }}
          checked={checkbox}
        />
        <label htmlFor="ch">Completed</label>

        <br />
        <br />
        <input type="radio"
          value="Male"
          onChange={(e) => { setgender(e.target.checked) }}
          checked={gender == "Male" && true} />Male
        <input type="radio"
          value="Female"
          onChange={(e) => { setgender(e.target.checked) }}
          checked={gender == "Female" && true} />Female

        <br />
        <br />
        <select onChange={(e)=>setcity(e.target.value)} value={city}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="agra">Agra</option>
        </select>
        <br />
        <br />
        <button>Create ToDo</button>
      </form>
    </div>
  )
}

export default App