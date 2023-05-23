import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
/*
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from "/pages/Contact"
import Error404 from './components/Error404'
/*
const router = createBrowserRouter([{
  path:"/",
  element:<Home/>,
  errorElement:<Error404/>
},
{
  path:"/contact",
  element:<Contact/>,
  errorElement:<Error404/>
}
])*/

//<RouterProvider router={router}/>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
