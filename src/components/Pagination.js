import React from 'react';

const Pagination = props => {
    return(
        <div className="pb-5">
            <button onClick={props.paginationPrevious} type="button" className="btn btn-info mr-3">Anteriror &larr;</button>
            <button onClick={props.paginationNext} type="button" className="btn btn-info">Siguiente &rarr;</button>
        </div>
    )
}

export default Pagination;