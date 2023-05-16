//import { useState } from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Error404 from "./components/Error404"
import {contact, home} from "./Routes/myRoutes"
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={home} exact element={<Home/>}/>
          <Route path={contact} element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
