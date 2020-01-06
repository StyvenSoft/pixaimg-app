import React, { Component } from 'react';
import Searcher from './components/Searcher';
import Result from './components/Result';

class App extends Component{

  state = {
    term : '',
    images : [],
    page : ''   
  }

  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start');
  }

  paginationPrevious = () =>{
    let page = this.state.page;
    if(page === 1) return null;
    page--;
    this.setState({
      page
    }, () =>{
      this.searchApi();
      this.scroll();
    });
    console.log("Anterior")
  }

  paginationNext = () =>{
    let page = this.state.page;
    page++;
    this.setState({
      page
    }, () =>{
      this.searchApi();
      this.scroll();
    });
    console.log("Siguiente")
  }

  searchApi = () =>{
    const terms = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=14436935-576eb479a35a06e9082a2ddf4&q=${terms}&page=${page}`;
    //console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({ images : result.hits }))
  }

  dataSearch = (term) => {
    //console.log(term)
    this.setState({
      term : term,
      page : 1
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
          <div className="row justify-content-center">
            <Result images = { this.state.images } paginationPrevious = { this.paginationPrevious }  paginationNext = { this.paginationNext }/>
          </div>
      </div>
    );
  }
}

export default App;
