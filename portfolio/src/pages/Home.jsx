import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import  Footer  from '../components/Footer'

const Home = () => {
 
  const nombre = "alvaro"

  const numeros = [ 2 , 8 ,12 , 1 , 18]

  const alumno = {id:1,nombre:"alvaro",apellido:"llovera",edad:32,hobby:"cantar",imagen:"https://img.lagaceta.com.ar/fotos/notas/2023/02/01/dia-perro-salchicha-por-se-celebra-cada-1-febrero-argentina-978606-135326.jpg",description:"soy una persona muy estudiosa y me fascina react "}

  const perros = [{id:1,nombre:"firulais",edad:5,raza:"salchicha"}]

  const saludar =()=> {
    return <h3>Welcome to react</h3>
    
  }

  
  return (
    <div>
        <Header nombre={nombre}  titulo="Bienvenidos"/>
        <Main alumno={alumno}/>
        <Footer saludar={saludar}/>           
        
    </div>
  )
}

export default Home