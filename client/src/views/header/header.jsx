import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import img from '../../assets/Rick and Morty.png'
import { searchCharacter } from '../../redux/actions';
import '../../styles/header.scss';
import Post from '../body/components/post';

export default function Header () {

    const dispatch = useDispatch()
    const [ search, setSearch ] = useState('')
    const searchedCharacter = useSelector(state => state.searchedCharacter)

    const onChange = (e) => {
        setSearch(e.target.value)
        if (search.length > 0){
        dispatch(searchCharacter(search))}
    }

    return (
        <>
        <div className='container_header' >
                <img src={img} alt='Rick and Morty IMG' />
                <div className='navegacion'>
                    <div className='botones'>
                        <button>PERSONAJES</button>
                        <button>UBICACIONES</button>
                        <button>EPISODIOS</button>
                    </div>
                    <div className='busqueda'>
                        <input type='search' placeholder='Introduce el nombre del personaje' className='inputSearch' name='buscar' onChange={onChange} value={search} />
                        <div className='texto'>
                            <p>Test FrontEnd</p>
                        </div>
                    </div>
                </div>
        </div>
        {
            search ? (
                <div className='container_posts'>
                {
                    searchedCharacter ? searchedCharacter.map(c => (
                            <Post name={c.name} image={c.image} />
                    )) : null
                }
                </div>
            ): null
        }
        </>
    )
}