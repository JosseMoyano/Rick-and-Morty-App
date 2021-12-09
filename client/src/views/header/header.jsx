import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import img from '../../assets/Rick and Morty.png'
import { cleanSearchedCharacter, searchCharacter } from '../../redux/actions';
import '../../styles/header.scss';
import Post from '../body/components/post';

export default function Header () {

    const history = useHistory()
    const dispatch = useDispatch()
    const [ search, setSearch ] = useState('')
    const searchedCharacter = useSelector(state => state.searchedCharacter)

    const onChange = (e) => {
        setSearch(e.target.value)
        if (search.length > 0){
        return dispatch(searchCharacter(search))
        }
    }

    useEffect(() => {
        if(search === '') dispatch(cleanSearchedCharacter())
    }, [dispatch, search])

    return (
        <>
        <div className='container_header' >
                <div className='navegacion'>
                    <div className='busqueda'>
                        <img src={img} alt='Rick and Morty IMG' />
                        <input type='search' placeholder='Introduce el nombre del personaje' className='inputSearch' name='buscar' onChange={onChange} value={search} />
                        <div className='texto'>
                            <p>Test FrontEnd</p>
                        </div>
                    </div>
                    <div className='botones'>
                        <button onClick={() => history.push('./')}>PERSONAJES</button>
                        <button onClick={() => history.push('./ubicaciones')}>UBICACIONES</button>
                        <button onClick={() => history.push('./episodios')}>EPISODIOS</button>
                    </div>
                </div>
        </div>
        <div className='slide'></div>
        <div className='container_posts_header'>
        {
                    search && searchedCharacter === "No hay coincidencias" ? (
                        <p>No hay coincidencias</p>
                    ) : search && searchedCharacter?.length > 0 ? searchedCharacter.map(c => (
                        <Post name={c.name} image={c.image} />
                    )) : null
        }
        </div>
        </>
    )
}