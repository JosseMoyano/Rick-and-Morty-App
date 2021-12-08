import React/* , { useState } */ from 'react';
// import ReactPaginate from 'react-paginate';
import CardIMG from './CardIMG';
// import s from "./post.module.css";
import '../../../styles/modal.scss'

export default function Modal (props) {

    let { name, residents, cerrar } = props; 

    // let hash = {};
    // residents = residents.filter(o => hash[o.id] ? false : hash[o.id] = true);

    let set                 = new Set( residents.map( JSON.stringify ) )
    let arrSinDuplicaciones = Array.from( set ).map( JSON.parse );

    console.log('arrSinDuplicaciones:', arrSinDuplicaciones)
    // const [pageNumber, setPageNumber] = useState(0);
    // const postsByPage = 1;
    // const pagesVisited = pageNumber * postsByPage;
    // const pageCount = Math.ceil(residents?.length / postsByPage);

    // const changePage = ({ selected }) => {
    //     setPageNumber(selected);
    // };

    return (
        <div className='div_modal'>
            {/* <h2 className='h2_modal'>Residentes de {name}!</h2> */}
            {
                arrSinDuplicaciones ? arrSinDuplicaciones?.map(r => (
                    <CardIMG resident={r} name={name} />
                )) : <p>cargando...</p>
            }
            <div className='div_buttons_modals'>                            
                <button value='ok' className='button_modal' onClick={() => cerrar()}>Cerrar</button>
            </div>  
            {/* <div className='paginado'>
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
            </div>          */}
        </div>
    )
}