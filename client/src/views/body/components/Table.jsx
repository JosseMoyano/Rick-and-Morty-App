import React, { useState } from "react";
import Modal from "./Modal";
import '../../../styles/table.scss'

export default function Table0 (props) {

    const {name, airDate_type, episode_dimension, characters_residents} = props
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
                <td className='td'>{name}</td>
                <td className='td'>{airDate_type}</td>
                <td className='td'>{episode_dimension}</td>
                <td className='td'><button className='boton' onClick={onClick}> Mostrar </button></td>
            </tr>
            {
                mostrar ? (
                <Modal characters_residents={characters_residents} cerrar={cerrar}/>
                ) : null
            }
        </>
    )
}