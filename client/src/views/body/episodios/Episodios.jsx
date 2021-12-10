import React from "react";
import Sidebar from "../components/Sidebar";
import '../../../styles/personajes.scss'

export default function Episodios () {
    
    return (
        <div className='container_body'>
            <div className='container_titulo'>
                <hr align="left" width="100%" className='hr_left'></hr>
                <p className='titulo'>EPISODIOS</p>
                <hr align="right" width="100%" className='hr_right'></hr>
            </div>
             <div className='sidebar'>
                <Sidebar page={'episodes'} filtro={'Episodio'}/>
            </div> 
        </div>
    )
}