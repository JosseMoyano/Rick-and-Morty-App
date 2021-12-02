import React, { useEffect, useState } from "react";
import Posts from "./posts";
import { useDispatch, useSelector } from 'react-redux';
import '../../../styles/sidebar.scss'
import { getCharacters } from "../../../redux/actions";

export default function Sidebar () {

    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters)
    
    const [ filters, setFilters ]=useState({
        gender:"any",
        status:"any",
        name: ''
    })
    
    const onChange = (e) => {
        if (e.target.name === 'estado') setFilters({...filters, status: e.target.value})
        if (e.target.name === 'genero') setFilters({...filters, gender: e.target.value})
        if (e.target.name === 'nombre') setFilters({...filters, name: e.target.value})
    }

    useEffect(() => {    
        dispatch(getCharacters(filters.status, filters.gender, filters.name))
    }, [dispatch, filters.gender, filters.name, filters.status])

    function unselect() {
        document.querySelectorAll('[name=estado]').forEach((x) => x.checked = false);
        setFilters({...filters, status: 'any'})
    }

    function unselectGenero() {
        document.querySelectorAll('[name=genero]').forEach((x) => x.checked = false);
        setFilters({...filters, gender: 'any'})

    }

    return (
        <>
        <div className='container_sidebar'>
                <div className='container_title'>
                    <p className='title'>Estado</p>
                    <hr className='hr'/>
                    <div className='container_input' onChange={ (e) => onChange(e)}>
                        <label className='label' htmlFor='vivo'><input type='radio' className='input' name='estado' value='alive' id='vivo'/>Vivo</label>
                        <label className='label' htmlFor='muerto'><input type='radio' className='input' name='estado' value='dead' id='muerto' />Muerto</label>                {/* </div> */}
                        <label className='label' htmlFor='desconocido' ><input type='radio' className='input' name='estado' value='unknown' id='desconocido'/>Desconocido</label>
                    </div>
                    <button id="unselect" onClick={() => unselect()}>Sin Filtros</button>
                </div>
                <div className='container_title'>
                    <p className='title'>Genero</p>
                    <hr className='hr'/>
                    <div className='container_input' onChange={(e) => onChange(e)}>
                        <label className='label' htmlFor='masculino'><input type='radio' className='input' name='genero' value='male' id='masculino' />Masculino</label>
                        <label className='label' htmlFor='femenido'><input type='radio' className='input' name='genero' value='female' id='femenido'/>Femenido</label>
                    </div>
                    <button id="unselect" onClick={() => unselectGenero()}>Sin Filtros</button>
                </div>
                <div className='container_title'>
                    <p className='title'>Nombre</p>
                    <hr className='hr'/>
                    <div className='container_input' onChange={(e) => onChange(e)}>
                        <input type='search' name='nombre' id='nombre' value={filters.name} placeholder='Nombre...' className='input_search'/>
                    </div>
                </div>
        </div>
        <div className='container_posts'>
            <Posts characters={characters}/>
        </div>
        </>
    )
}