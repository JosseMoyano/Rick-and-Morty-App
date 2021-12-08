import React from 'react';
import { Route } from 'react-router-dom';
import Episodios from './views/body/episodios';
import Personajes from './views/body/personajes';
import Ubicaciones from './views/body/ubicaciones';
// import Footer from './views/footer/footer';
import Header from './views/header/header';

function App() {
  return (
    <>
    <Header/>
      <Route exact path="/" component={Personajes} />
      <Route path="/ubicaciones" component={Ubicaciones}/>
      <Route path="/episodios" component={Episodios}/>
    {/* <Footer/> */}
    </>
  );
}

export default App;
