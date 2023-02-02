import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/* ReactDOM.render(QUE, DONDE)

Quiere decir que como primer parámetro el render recibe el componente que queremos renderizar y 
el segundo parámetro es donde lo vamos a mostrar */

ReactDOM.render(<App />, document.getElementById('app'));

