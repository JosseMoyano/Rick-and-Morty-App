import React from "react";
import Sidebar from "./components/sidebar";
import '../../styles/body.scss'

export default function Body () {
    
    return (
        <div className='container_body'>
            <div className='container_titulo'>
                <hr align="left" width="100%" className='hr_left'></hr>
                <p className='titulo'>PERSONAJES</p>
                <hr align="right" width="100%" className='hr_right'></hr>
            </div>
            <div className='sidebar'>
                <Sidebar/>
            </div>
        </div>
       
    )
}