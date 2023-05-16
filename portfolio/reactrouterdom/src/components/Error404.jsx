import {Link} from "react-router-dom"

const Error404 = () => {
  return (
    <div>
        <h1>Error 404</h1>
        <img src="https://http.cat/404" alt="" />
        <br />
        <h3>Pagina no encontrada</h3>
        <p>desea volver a la ruta principal?? <Link to="/">Home</Link></p>
    </div>
  )
}

export default Error404