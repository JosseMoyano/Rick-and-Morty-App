import React from 'react';
import img from '../../assets/Rick and Morty.png'
import '../../styles/header.scss';

export default function Header () {

    return (
        <div className='container_header' >
                <img src={img} alt='Rick and Morty IMG' />
                <div className='navegacion'>
                    <div className='botones'>
                        <button>PERSONAJES</button>
                        <button>UBICACIONES</button>
                        <button>EPISODIOS</button>
                    </div>
                    <div className='busqueda'>
                        <input type='search' placeholder='Introduce el nombre del personaje' className='inputSearch' />
                        <div className='texto'>
                            <p>Test FrontEnd</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}