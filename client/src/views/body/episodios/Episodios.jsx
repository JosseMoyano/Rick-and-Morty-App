import React from "react";
import '../../../styles/personajes.scss'
import Sidebar0 from "../components/Sidebar";

export default function Episodios () {
    
    return (
        <div className='container_body'>
            <div className='container_titulo'>
                <hr align="left" width="100%" className='hr_left'></hr>
                <p className='titulo'>EPISODIOS</p>
                <hr align="right" width="100%" className='hr_right'></hr>
            </div>
             <div className='sidebar'>
                <Sidebar0 page={'episodes'} filtro={'Episodio'}/>
            </div> 
        </div>
    )
}