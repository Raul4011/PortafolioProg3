import React from 'react'
import { useState } from 'react'
import { Form, Button, Table } from "react-bootstrap"
import "../css/MainContact.css"
const MainContact = () => {

    const consultas = [{
        id: 1, nombre: "liliana diaz", email: "lili2022@gmail.com", descripcion: "quiero realizar una app"
    },
    { id: 2, nombre: "carlos lopez", email: "carlin@gmail.com", descripcion: "necesito un presupuesto" },
    { id: 3, nombre: "diego ramirez", email: "dieguito21@gmail.com", descripcion: "necesito comunicarme con vos" }
    ]

    const [pedidos, setPedidos] = useState(consultas)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [id, setId] = useState(null)

    const myStyles = {
        width: "60%",
        backgroundColor: "orange"
    }

    const handlerChange = (e) => {
        setEmail(e.target.value)
    }
    const agregarConsulta = (e) => {
        e.preventDefault();
        setPedidos([...pedidos, { id, nombre, email, descripcion }])
        alert("me contactare contigo a la brevedad")
        e.target.reset()
    }

    const deleteConsulta = (id) => {
        console.log("borro el id: " + id);
        const resultado = pedidos.filter(pedido=>pedido.id !== id)
        setPedidos(resultado)
    }

    return (
        <div className='contact'>
            <br />
            <br />
            <h3 className='text-center'>Contactame</h3>
            <br />
            <br />
            <Form className='text-center ' onSubmit={agregarConsulta}>
                <Form.Group style={{ width: "40%", margin: "auto" }}>
                    <Form.Label>Id</Form.Label>
                    <Form.Control type='text' onChange={(e) => setId(e.target.value)} required/>
                    <br />
                    <Form.Label>nombre</Form.Label>
                    <Form.Control type='text' onChange={(e) => setNombre(e.target.value)} required/>
                    <br />
                    <Form.Label>email</Form.Label>
                    <Form.Control type="text" onChange={handlerChange} required/>
                    <br />
                    <Form.Label type="text" >descripcion</Form.Label>
                    <Form.Control onChange={(e) => setDescripcion(e.target.value)} required/>
                    <br />
                    <Button className='btn btn-primary' type='submit'>enviar mensaje</Button>
                </Form.Group>
            </Form>
            <br />
            <br />
            <Table striped bordered hover className='container'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre </th>
                        <th>Email</th>
                        <th>Descripcion</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map(pedido =>
                        <tr key={pedido.id}>
                            <td>{pedido.id}</td>
                            <td>{pedido.nombre}</td>
                            <td>{pedido.email}</td>
                            <td>{pedido.descripcion}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => deleteConsulta(pedido.id)}>eliminar</button>
                            </td>
                        </tr>
                    )}


                </tbody>
            </Table>
        </div>
    )
}

export default MainContact