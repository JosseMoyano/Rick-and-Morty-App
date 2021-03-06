import React , { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { cleanCharacter, getCharacter } from '../../../redux/actions';
import Post from './Post';
import s from "./post.module.css";
import '../../../styles/modal.scss'

export default function Modal (props) {

    let { characters_residents, cerrar } = props; 

    const dispatch = useDispatch();
    const character = useSelector(state => state.character)

    useEffect(() => {
        characters_residents.forEach(r => (
            dispatch(getCharacter(r))
        ))
        return () => {
            dispatch(cleanCharacter())
        }
    }, [dispatch, characters_residents])

    const [pageNumber, setPageNumber] = useState(0);
    const postsByPage = 3;
    const pagesVisited = pageNumber * postsByPage;
    const pageCount = Math.ceil(character?.length / postsByPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className='div_modal'>
            <div className='div_buttons_modals'>                            
                <button value='ok' className='button_modal' onClick={() => cerrar()}>Cerrar</button>
            </div> 
            <div className='div_container'>
                {
                    character && character.length > 0 ? character?.slice(pagesVisited, pagesVisited + postsByPage).map(c => (
                        <Post name={c.name} image={c.image} key={c.id} />
                    )) :  <p>No existen personajes...</p>
                }
            </div>
            <div className='paginado'>
                <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={s.paginationBttns}
                previousLinkClassName={s.previousBttn}
                nextLinkClassName={s.nextBttn}
                disabledClassName={s.paginationDisabled}
                activeClassName={s.paginationActive}
                pageRangeDisplayed={0}
                marginPagesDisplayed={1}
                />
            </div>         
        </div>
    )
}