import React, { Component } from 'react';
import Searcher from './components/Searcher';
import Result from './components/Result';

class App extends Component{

  state = {
    term : '',
    images : []
  }

  searchApi = () =>{
    const terms = this.state.term;
    const url = `https://pixabay.com/api/?key=14436935-576eb479a35a06e9082a2ddf4&q=${terms}`;
    //console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({ images : result.hits }))
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
            <Searcher dataSearch = { this.dataSearch }/>
          </div>
          { this.state.term } 
          <Result images = { this.state.images } />
      </div>
    );
  }
}

export default App;
