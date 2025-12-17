import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import Intraction from "./Components/Intraction"
import Function_Process from "./Components/Function_Process"
import Primotive from "./Components/Primitive"
import Non_Primitive from "./Components/Non_Primitive"

const App = () => {
  return (
    <>
    <header>
      <NavBar/>
    </header>

    <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="intraction" element={<Intraction/>}/>
          <Route path="Function" element={<Function_Process/>}/>
        </Routes>
    </main>

    <section>
      <Primotive/>
    </section>

    <section>
      <Non_Primitive/>
    </section>


    
    </>
  )
}

export default App
