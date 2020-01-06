import React, { Component } from 'react';
import Image from './Image';
import Pagination from './Pagination';

class Result extends Component {
    showImages = () =>{
        const images = this.props.images;
        if(images.length === 0) return null;
        // console.log(images);
        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    { images.map(image =>(
                        <Image key = { image.id } image = { image } />
                    )) }
                </div>
                <Pagination paginationPrevious = { this.props.paginationPrevious }  paginationNext = { this.props.paginationNext }/>
            </React.Fragment>
        )
    }
    render() { 
        return ( 
            <React.Fragment>
                { this.showImages() }
            </React.Fragment>
         );
    }
}
 
export default Result;