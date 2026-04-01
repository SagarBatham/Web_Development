
import Nav from "./components/Nav";
import Mainroute from "./routes/Mainroute";

const App = () => {
  console.log("Hello");

  return (<div className="p-10 bg-zinc-700 text-white w-screen h-screen">
    <Nav/>
    <Mainroute/>
  </div>
    
  )
}

export default App