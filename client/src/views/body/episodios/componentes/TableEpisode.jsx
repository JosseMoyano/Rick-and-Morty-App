import React, { useState } from "react";
import Modal from "../../components/Modal";
import '../../../../styles/table.scss'


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
            <td className='td'>{name}</td>
            <td className='td'>{air_date}</td>
            <td className='td'>{episode}</td>
            <td className='td'><button className='boton' onClick={onClick}> Mostrar </button></td>
        </tr>
        {
            mostrar ? (
            <Modal residents={characters} cerrar={cerrar}/>
            ) : null
        }
        </>
    )
}