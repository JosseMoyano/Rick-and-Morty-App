import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store/index.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
Faltaria colocar alguna imagen mientras carga los resultados 
Faltaria ver archivo por archivo para corregir errores
Faltaria ver los warnings 
Faltaria ver si se puede reutilizar los componentes de Episodios con ubicaciones y personajes
*/
