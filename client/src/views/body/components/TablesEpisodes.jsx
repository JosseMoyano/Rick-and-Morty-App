import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import s from "./post.module.css";
import TableEpisode from './TableEpisode';

export default function TablesEpisodes (props) {

    const { episodes } = props;

    const [pageNumber, setPageNumber] = useState(0);
    const postsByPage = 20;
    const pagesVisited = pageNumber * postsByPage;
    const pageCount = Math.ceil(episodes?.length / postsByPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <table>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha</th>
                  <th>Episodio</th>
                  <th>Personajes</th>
                </tr>
                {
                    episodes?.length > 0 ? (
                        episodes?.slice(pagesVisited, pagesVisited + postsByPage).map(c => (
                            <TableEpisode name={c.name} air_date={c.air_date} episode={c.episode} characters={c.characters} />
                        ))
                    ) : <p>cargando en tablesepisodio...</p>
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
                marginPagesDisplayed={1}
            />
            </div>
        </>
    )
}