import { useState } from "react";
import { Link,useNavigate } from "react-router-dom"

const Main = () => {

const navigate = useNavigate();


const [personajes,setPersonajes] = useState([])

const handleClick = ()=>{
  alert("voy a viajar a Contactos")
  navigate("/contact")

  
}


const getCharacters = async()=>{
  const response = await fetch("https://rickandmortyapi.com/api/character")
  const data = await response.json() 
  console.log(data);
  setPersonajes(data.results)
}
getCharacters()

  return (
    <div>
      <h1>Welcome to React</h1>
      <br />
      <Link to="/contact">vamos a contact</Link>
      <br />
      <button onClick={handleClick} className="btn btn-primary">viaja a contactos</button>
      <br />
      <button onClick={getCharacters}>characters</button>
      <br />
      <div className="row">
        {personajes.map(personaje=>
        
        <>
        <div className="col-6">
          <img src={personaje.image} alt="" />
          <h3>nombre: {personaje.name}</h3>
          <p>Estado: {personaje.status}</p>
          <p>Genero: {personaje.gender}</p>
          
          <Link to={`/character/${personaje.id}`} className="btn btn-primary">ver</Link>
          <br />
          <br />
        </div>
        </>

        )
        }
        
      </div>
    </div>
  )
}

export default Main