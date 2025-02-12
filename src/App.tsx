import './styles/App.css'
import useStructree from "./hooks/hooks.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  const {rawTree} = useStructree()

  return (
    <div>
      <div className="h-screen w-screen flex-col flex items-center">
        <Navbar/>
        <div className="w-full h-full flex items-center justify-center">
          <div className="mx-auto">
            {rawTree}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
