import React from 'react'
import { useState } from "react";

const Main = () => {
  /*
  const estado = useState("pepito");
  const getcounter = estado[0]
  const setCounter = estado[1]*/

  //const initialState = 12

  const initialState = {
    id:0,
    nombre:"",
    value:true,
    gatos:[],
    perro:{}

  }
  const [users,setUsers] = useState(initialState)

  const [counter,setCounter] = useState(18);
  const [value,setValue] = useState(false)
  const [inputValue,setInputValue] = useState("pepito")
  const [gato,minino]= useState("michifus")


 


  //console.log();


  const handleClick =()=>{
    alert("estoy presionando un h3");
  }


  let contador = 0;

  for (let index = 0; index < 10; index++) {
    contador++;
    
  }

  

  const getValue =(event)=>{
    //console.log(event);
    //const valor= document.getElementById("input1").value;

    let valor = event.target.value;
  }

  /*
  const mouseEnter = () =>{
    console.log("entro en el h1");
  }

  const mouseLeave = () =>{
    console.log("salgo del H1")
  }
*/

  let saludo = "Hola chicos como estan"


  const mutateVar =()=>{
      setCounter(79);
  }

const operacion =()=>{
  let num1 = prompt
}


  return (
    <>
    <h3 onClick={handleClick}>hola como estan</h3>

    <h1 >Welcome</h1>

    <input type="text" id='input1' onChange={getValue}/>
    <button onClick={getValue}>agregar</button>
<br />
    <h5>{saludo}</h5>
    <button onClick={mutateVar}>mutar</button>


    <br />
    <br />
    <br />
    <h4>{counter}</h4>



    <br />



    <h2>{value ? "estoy dentro del H2" : "estoy fuera del H2"}</h2>
    <button onClick={()=>setValue(!value)}>cambio Estado</button>
<br />
<br />
<br />
<input type="text" onChange={(e)=>setInputValue(e.target.value)} />

<br />
<h3>{inputValue}</h3>





    </>
    

    
  )
}





export default Main