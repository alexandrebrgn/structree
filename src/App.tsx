import './styles/App.css'
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import InputTextArea from "./components/InputTextArea.tsx";
import OutputTextArea from "./components/OutputTextArea.tsx";

function App() {

  return (
    <div>
      <div className="h-screen w-screen flex-col flex items-center">
        <Navbar/>
        <div className="w-full h-full flex flex-row items-center justify-center gap-10">
            <InputTextArea/>
            <OutputTextArea/>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
