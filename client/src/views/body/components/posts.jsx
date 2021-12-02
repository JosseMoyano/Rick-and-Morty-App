import React, { useState } from "react";
import Post from "./post";
import ReactPaginate from "react-paginate";
import s from "./post.module.css";
import '../../../styles/posts.scss'

export default function Posts (props) {

    const { characters } = props;
    const [pageNumber, setPageNumber] = useState(0);
    const postsByPage = 8;
    const pagesVisited = pageNumber * postsByPage;
    const pageCount = Math.ceil(characters?.length / postsByPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };

    return (
        <>
            {
                characters ? (
                    characters?.slice(pagesVisited, pagesVisited + postsByPage).map(c => (
                        <div className='container_posts' key={c.id}>
                            <Post name={c.name} image={c.image} />
                        </div>

                ))) : <p>cargando...</p>
            }
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