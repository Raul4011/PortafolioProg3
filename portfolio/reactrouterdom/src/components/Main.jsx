import { useState } from "react"

const Main = () => {
    let array = [0,5,4];

    const [random,setRandom] = useState(Math.floor(Math.random() * (99 - 1 + 1)) +1)
    const [numero,setNumero] = useState(1)
    const [player,setPlayer] = useState(1)
    const [jugadas,setJugadas] = useState(array)

const handleClick =()=>{
    //setNumero(numero+1)
   
    numero===6 ? setNumero(1) : setNumero(numero+1)
    setPlayer(player===1 ? 2 : 1)
    setJugadas([...jugadas,numero])
}


  
  return (
    <div>
        <p>jugador numero {player}</p>
        <img src={`${numero}.jpeg`}/>
        <br />
        <button onClick={handleClick}>cambiar</button>
        <br />
        <br />
        <h3>historial de jugadas</h3>
        <ul>

        
        {jugadas.map((jugada,index)=><li key={index}>
            {jugada}
        </li>)}
        </ul>
<br />
<br />
<h3>numero random : {random}</h3>
    </div>
  )
}

export default Main