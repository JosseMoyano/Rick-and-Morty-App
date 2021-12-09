import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import '../../../../styles/sidebar.scss'
import { getLocations } from "../../../../redux/actions";
import Tables from "./Tables";

export default function SidebarUbicaciones () {

    const dispatch = useDispatch()
    const locations = useSelector(state => state.locations)
    
    const [ filters, setFilters ]=useState({
        tipo:'',
        name: ''
    })
    
    const onChange = (e) => {
        if (e.target.name === 'tipo') setFilters({...filters, tipo: e.target.value})
        if (e.target.name === 'nombre') setFilters({...filters, name: e.target.value})
    }

    useEffect(() => {    
        dispatch(getLocations(filters.tipo, filters.name))
    }, [dispatch, filters.name, filters.tipo])

    return (
        <>
        <div className='container_sidebar'>
                <div className='container_title'>
                    <p className='title'>Nombre</p>
                    <hr className='hr'/>
                    <div className='container_input' onChange={(e) => onChange(e)}>
                        <input type='search' name='nombre' id='nombre' value={filters.name} placeholder='Nombre...' className='input_search'/>
                    </div>
                </div>
                <div className='container_title'>
                    <p className='title'>Tipo</p>
                    <hr className='hr'/>
                    <div className='container_input' onChange={(e) => onChange(e)}>
                        <input type='search' name='tipo' id='tipo' value={filters.tipo} placeholder='Nombre...' className='input_search'/>
                    </div>
                </div>
        </div>
        <div className='container_posts'>
            <Tables locations={locations}/>
        </div>
        </>
    )
}