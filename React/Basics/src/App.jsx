export const x = 2;



const App = () => {
  const ButtonClicked = () => {
    alert("Button Baj Gayi")
  }

  // const wrapper=()=>{
  //   paraFunction("Bhagooooooo")
  // }
  const paraFunction=(msg)=>{
    alert(msg)
  }
  return (
    <>
      <h2>This is New Page</h2>
      <button onClick={ButtonClicked}>Click</button>

      <button onClick={()=>paraFunction("Bhag000")}>Click(2nd Button)</button>
    </>
  )
}

export default App
