import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

/* ReactDOM.render(QUE, DONDE)

Quiere decir que como primer parámetro el render recibe el componente que queremos renderizar y 
el segundo parámetro es donde lo vamos a mostrar */

ReactDOM.render(<App />, document.getElementById('app'));

/* NUEVA VERSIÓN DE REACT */

/* 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

 ESTO YA NO FUNCIONA
 ReactDOM.render(
     <App />,
     document.getElementById('root')
 );

AHORA ES ASI
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />); 
*/
