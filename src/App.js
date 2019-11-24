import React, { Component } from 'react';
import Searcher from './components/Searcher';

class App extends Component{

  dataSearch = (term) => {
    console.log(term)
  }
  render() {

    return (
      <div className="App Container">
          <div className="jumbotron">
            <p className="lead text-center">Buscar Imagen..</p>
            <Searcher dataSearch={this.dataSearch}/>
          </div>
      </div>
    );
  }
}


export default App;
