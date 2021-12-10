import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Table from './Table';
import s from "./post.module.css";
import '../../../styles/tables.scss';

export default function Tables0 (props) {

    const { state, page } = props;

    const [pageNumber, setPageNumber] = useState(0);
    const postsByPage = 20;
    const pagesVisited = pageNumber * postsByPage;
    const pageCount = Math.ceil(state?.length / postsByPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <table className='table'>
                <tr className='tr'>
                  <th className='th'>Nombre</th>
                  <th className='th'>{page === 'episodes' ? 'Fecha' : 'Tipo'}</th>
                  <th className='th'>{page === 'episodes' ? 'Episodio' : 'Dimension'}</th>
                  <th className='th' style={{textAlign:'center'}}>{page === 'episodes' ? 'Personajes' : 'Residentes'}</th>
                </tr>
                {
                    state === 'No hay coincidencias' ? (
                        <p>No hay coincidencias</p>
                    ) : page === 'episodes' ?(
                    state?.length > 0 ? (
                        state?.slice(pagesVisited, pagesVisited + postsByPage).map(c => (
                            <Table 
                            name={c.name} 
                            airDate_type={c.air_date} episode_dimension={c.episode} 
                            characters_residents={c.characters} 
                            key={c.id} />
                        ))
                    ) : <p>cargando...</p>
                    ) :  state?.length > 0 ? (
                        state?.slice(pagesVisited, pagesVisited + postsByPage).map(c => (
                            <Table 
                            name={c.name} 
                            airDate_type={c.type} 
                            episode_dimension={c.dimension} 
                            characters_residents={c.residents} 
                            key={c.id}/>
                        ))
                    ) : <p>cargando...</p>
                }
            </table>
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
                marginPagesDisplayed={1} /> 
            </div>
        </>
    )
}