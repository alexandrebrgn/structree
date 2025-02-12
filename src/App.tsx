import './App.css'
import {useContext} from "react";
import {MyStructreeContext} from "./context/context.tsx";

function App() {

  const[rawTree, setRawTree] = useContext(MyStructreeContext)

  return (
    <div className="h-screen w-screen flex items-center">
      <div className="mx-auto"></div>
    </div>
  )
}

export default App
