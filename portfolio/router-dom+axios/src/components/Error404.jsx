import { useRouteError } from "react-router-dom"

const Error404 = () => {

    const error = useRouteError();
  return (
    <div>
        <h3>UPSSSS algo malio sal</h3>
        <br />
        <p>{error.message || error.statusText}</p>
    </div>
  )
}

export default Error404