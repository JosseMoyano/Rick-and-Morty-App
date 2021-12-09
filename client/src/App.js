import React from 'react';
import { Route } from 'react-router-dom';
import Episodios from './views/body/episodios/Episodios';
import Personajes from './views/body/personajes/Personajes';
import Ubicaciones from './views/body/ubicaciones/Ubicaciones';
import Header from './views/header/Header';

function App() {
  return (
    <>
      <Header/>
      <Route exact path="/" component={Personajes} />
      <Route path="/ubicaciones" component={Ubicaciones}/>
      <Route path="/episodios" component={Episodios}/>
    </>
  );
}

export default App;
