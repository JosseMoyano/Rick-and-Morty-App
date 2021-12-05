import React, { useState } from "react";
import Modal from "./Modal";

export default function TableEpisode (props) {

    const {name, air_date, episode, characters} = props
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
            <td>{air_date}</td>
            <td>{episode}</td>
            <td><button onClick={onClick}> Mostrar </button></td>
        </tr>
        {
            mostrar ? (
            <Modal name={name} residents={characters} cerrar={cerrar}/>
            ) : null
        }
        </>
    )
}