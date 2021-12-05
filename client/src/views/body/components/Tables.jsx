import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import s from "./post.module.css";
import Table from './Table';

export default function Tables (props) {

    const { locations } = props;

    const [pageNumber, setPageNumber] = useState(0);
    const postsByPage = 20;
    const pagesVisited = pageNumber * postsByPage;
    const pageCount = Math.ceil(locations?.length / postsByPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <table>
                <tr>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Dimension</th>
                  <th>Residentes</th>
                </tr>
                {
                    locations ? (
                        locations?.slice(pagesVisited, pagesVisited + postsByPage).map(c => (
                            <>
                            <Table name={c.name} type={c.type} dimension={c.dimension} residents={c.residents} />
                            </>
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
                marginPagesDisplayed={1}
            />
            </div>
        </>
    )
}