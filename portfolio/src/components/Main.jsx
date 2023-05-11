import React from 'react'
import gato from "../assets/siames.jpeg"
import "../css/Main.css"
import { Button, Container } from 'react-bootstrap'


const Main = (props) => {

  console.log("props en MAIN ", props.alumno);

  //const {id,nombre,apellido,edad,hobby,imagen,description} = props.alumno

  let valor = false;
  return (
    <>
    
    <div className='row'>
      <div className="col-6">
        <img src={gato} alt="" className='img' />
      </div>
      <div className="col-6">
        <h4 className={valor ? "text1" : "text2"}>hola mi nombre es alumno/a soy estudiante de la carrera de programacion en la utn frt tucuman me gusta mucho la programacion y soy Fullstack Ninja</h4>
      </div>
      <button>sumar</button>
      <Button>restar</Button>
      <br />
      <br /><br />
      

      <br />

      <Container>
        <p className='text-danger'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque sint, deleniti quaerat accusamus placeat numquam ullam vel cumque minima repudiandae reiciendis, commodi rem quam, provident consequuntur voluptate. Tempora, officiis!</p>
      </Container>
      <br />
      <ul>
        {/* {props.numeros.map((num,index)=><>
        
          <li key={index}>{num}</li>
       
      </>)} */}
      </ul>

    </div>
    <div className="card border" >
        <img className="card-img-top" src={props.alumno.imagen} alt="Card image cap" style={{width:"400px",height:"400px"}}/>
          <div className="card-body">
            <h5 className="card-title">nombre: {props.alumno.nombre}{" "}{props.alumno.apellido}</h5>
            <p className="card-text">edad: {props.alumno.edad}</p>
            <br />
            <p className="card-text">hobby: {props.alumno.hobby}</p>
          </div>
      </div>
    </>
  )
}

export default Main