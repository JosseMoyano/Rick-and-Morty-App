import React, { useState } from "react";
import Modal from "./Modal";

export default function Table (props) {

    const {name, type, dimension, residents} = props
    const [mostrar, setMostrar] = useState(false);


    const onClick = () => {
        setMostrar(!mostrar)
    }
    const cerrar = () => {
        setMostrar(false)
    }

    return (
        <>
        <tr>
            <td>{name}</td>
            <td>{type}</td>
            <td>{dimension}</td>
            <td><button onClick={onClick}> Mostrar </button></td>
        </tr>
        {
            mostrar ? (
            <Modal name={name} residents={residents} cerrar={cerrar}/>
            ) : null
        }
        </>
    )
}