import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import '../../../styles/sidebar.scss'
import { getEpisodes, getLocations } from "../../../redux/actions";
import Tables0 from "./Tables";

export default function Sidebar0 (props) {

    const { page, filtro } = props;

    const dispatch = useDispatch()
    const state = useSelector(state => state[page])

    const [ filters, setFilters ]=useState({
        name: '',
        adicional:'',
    })

    const onChange = (e) => {
        if (e.target.name === 'name') setFilters({...filters, name: e.target.value})
        if (e.target.name === 'adicional') setFilters({...filters, adicional: e.target.value})
    }

    useEffect(() => {    
        if(page === 'episodes') dispatch(getEpisodes(filters.name, filters.adicional))
        if(page === 'locations') dispatch(getLocations(filters.name, filters.adicional))
    }, [dispatch, filters.name, filters.adicional, page])
    
    return (
        <>
            <div className='container_sidebar'>
                    <div className='container_title'>
                        <p className='title'>Nombre</p>
                        <hr className='hr'/>
                        <div className='container_input' onChange={(e) => onChange(e)}>
                            <input type='search' name='name' id='nombre' value={filters.name} placeholder='Nombre...' className='input_search'/>
                        </div>
                    </div>
                    <div className='container_title'>
                        <p className='title'>{filtro}</p>
                        <hr className='hr'/>
                        <div className='container_input' onChange={(e) => onChange(e)}>
                            <input type='search' name='adicional' id='tipo' value={filters.adicional} placeholder='Nombre...' className='input_search'/>
                        </div>
                    </div>
            </div>
            <div className='container_posts'>
                <Tables0 state={state} page={page}/>
            </div>
        </>
    )
}