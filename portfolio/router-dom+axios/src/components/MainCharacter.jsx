import { Link, useParams } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

const MainCharacter = () => {
    const {id} = useParams()
    console.log("el id que me llega es "+id);

    const [personaje,setPersonaje] = useState({})

    const getCharacter = () =>{
         axios.get("https://rickandmortyapi.com/api/character/"+id)
        .then(resp=>{
            setPersonaje(resp.data)
        })
        .catch(error => console.log(error.message))
        
    }

    getCharacter()

  return (
    <div>
        <img src={personaje.image} alt="" />
        <h3>nombre: {personaje.name}</h3>
        <p>genero: {personaje.gender}</p>
        <p>
            estado: {personaje.status}
        </p>
        <Link to="/" className="btn btn-success">volver</Link>
    </div>
  )
}

export default MainCharacter