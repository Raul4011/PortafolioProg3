
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Error404 from './components/Error404';
import Character from './pages/Character';

function App() {
  //const [count, setCount] = useState(0)


  //console.log(count);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/character/:id' element={<Character/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
