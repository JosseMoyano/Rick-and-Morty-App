import React, { useEffect } from "react";
import Posts from "./posts";
import { useDispatch, useSelector } from 'react-redux';
import '../../../styles/sidebar.scss'
import { getCharacters } from "../../../redux/actions";

export default function Sidebar () {

    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters)

    useEffect(() => {
        dispatch(getCharacters())
    }, [dispatch])

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
        <div className='container_posts'>
            <Posts characters={characters}/>
        </div>
        </>
    )
}