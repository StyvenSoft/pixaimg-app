import React from 'react';
import Searcher from './components/Searcher';

function App() {
  return (
    <div className="App Container">
        <div className="jumbotron">
          <p className="lead text-center">Buscar Imagen..</p>
          <Searcher />
        </div>
    </div>
  );
}

export default App;
