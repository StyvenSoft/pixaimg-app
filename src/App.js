import React, { Component } from 'react';
import Searcher from './components/Searcher';

class App extends Component{

  state = {
    term : ''
  }

  searchApi = () =>{
    const url = `https://pixabay.com/api/?key=14436935-576eb479a35a06e9082a2ddf4&q=${this.state.term}`;
    console.log(url);
  }

  dataSearch = (term) => {
    //console.log(term)
    this.setState({
      term
    }, () =>{
      this.searchApi();
    })
  }
  render() {

    return (
      <div className="App Container">
          <div className="jumbotron">
            <p className="lead text-center">Buscar Imagen..</p>
            <Searcher dataSearch={this.dataSearch}/>
          </div>
          { this.state.term }
      </div>
    );
  }
}

export default App;
