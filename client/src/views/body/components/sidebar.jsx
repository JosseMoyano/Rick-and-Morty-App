import React from "react";
import Posts from "./posts";
import '../../../styles/sidebar.scss'

export default function Sidebar () {

    return (
        <>
        <div className='container_sidebar'>
                <div className='container_title'>
                    <p className='title'>{'title'}</p>
                    <hr className='hr'/>
                    <div className='container_input'>
                        <input type='checkbox' className='input'/>
                        <label className='label'>Hola</label>
                    </div>
                </div>
        </div>
        <Posts/>
        </>
    )
}