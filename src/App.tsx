import './styles/App.css'
import useStructree from "./hooks/hooks.tsx";

function App() {

  const {rawTree} = useStructree()

  return (
    <div className="h-screen w-screen flex items-center">
      <div className="mx-auto">{rawTree}</div>
    </div>
  )
}

export default App
