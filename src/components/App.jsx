import React from "react";
import Layout from "../containers/Layout";
import Login from '../containers/Login';
import RecoveryPassword from "../containers/RecoveryPassword";
import '../styles/global.css';

/* Si la etiqueta no recibe hijos la podemos cerrar inmediantamente
Ejemplo: <Login />
Pero si si recibe un hijo debemos hacerlo de la siguiente manera:
<Layout>
    childrens -> componentes
<Layout/> */

const App = () => {
    return (
        <Layout>
            <Login/>
            <RecoveryPassword/>
        </Layout>
    );
}

export default App;