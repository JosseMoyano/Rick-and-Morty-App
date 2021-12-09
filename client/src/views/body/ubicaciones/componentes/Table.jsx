import React, { useState } from "react";
import '../../../../styles/table.scss'
import Modal from "../../components/Modal";

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
            <td className='td'>{name}</td>
            <td className='td'>{type}</td>
            <td className='td'>{dimension}</td>
            <td className='td' ><button className='boton' onClick={onClick}> Mostrar </button></td>
        </tr>
        {
            mostrar ? (
                <Modal residents={residents} cerrar={cerrar}/>
            ) : null
        }
        </>
    )
}
