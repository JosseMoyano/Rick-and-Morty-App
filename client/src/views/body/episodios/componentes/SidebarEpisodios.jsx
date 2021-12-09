import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodes } from "../../../../redux/actions";
import '../../../../styles/sidebar.scss'
import TablesEpisodes from "./TablesEpisodes";

export default function SidebarEpisodios () {

    const dispatch = useDispatch()
    const episodes = useSelector(state => state.episodes)

    const [ filters, setFilters ]=useState({
        name: '',
        episode:'',
    })
    
    const onChange = (e) => {
        if (e.target.name === 'name') setFilters({...filters, name: e.target.value})
        if (e.target.name === 'episode') setFilters({...filters, episode: e.target.value})
    }

    useEffect(() => {    
        dispatch(getEpisodes(filters.name, filters.episode))
    }, [dispatch, filters.name, filters.episode])

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
                    <p className='title'>Episode</p>
                    <hr className='hr'/>
                    <div className='container_input' onChange={(e) => onChange(e)}>
                        <input type='search' name='episode' id='tipo' value={filters.episode} placeholder='Nombre...' className='input_search'/>
                    </div>
                </div>
        </div>
        <div className='container_posts'>
            <TablesEpisodes episodes={episodes}/>
        </div>
        </>
    )
}