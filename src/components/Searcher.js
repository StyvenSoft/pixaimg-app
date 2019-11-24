import React, { Component } from 'react';

class Searcher extends Component {
    
    searchRef = React.createRef();
    
    obtainData = (e) =>{
        e.preventDefault();
        //console.log(this.searchRef.current.value)
        const term =  this.searchRef.current.value;

        this.props.dataSearch(term);
    }

    render() { 
        return( 
            <form onSubmit={this.obtainData}>
                <div className="row">
                    {this.props.message}
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen favorita.." />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar" />
                    </div>
                </div>
            </form>
        );
    }
}

export default Searcher;