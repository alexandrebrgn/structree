import './styles/App.css'
import useStructree from "./hooks/hooks.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  const {rawTree} = useStructree()

  return (
    <div>
      <Navbar/>
      <div className="h-screen w-screen flex items-center">
        <div className="mx-auto">{rawTree}</div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
