import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import Intraction from "./Components/Intraction"

const App = () => {
  return (
    <>
    <header>
      <NavBar/>
    </header>

    <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="intraction" element={<Intraction/>}></Route>
        </Routes>
    </main>

    </>
  )
}

export default App
