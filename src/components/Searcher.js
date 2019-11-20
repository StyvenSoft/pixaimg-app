import React, { Component } from 'react';

class Searcher extends Component {
    render() { 
        return( 
            <form>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="text" className="form-control form-control-lg" placeholder="Busca tu imagen favorita.." />
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