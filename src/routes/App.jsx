import {
  BrowserRouter /* Identificar tipo de navegación (adelante o atrás de la página) */,
  Switch /* Estrcutuctura de control para cada una de las rutas que estamos usando */,
  Route /* manejos de ruta */,
} from "react-router-dom";
import React from "react";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import "../styles/global.css";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

/* Si la etiqueta no recibe hijos la podemos cerrar inmediantamente
Ejemplo: <Login />
Pero si si recibe un hijo debemos hacerlo de la siguiente manera:
<Layout>
    childrens -> componentes
<Layout/> */

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

/* NUEVA VERSIÓN DE REACT */

/* 
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import PasswordRecovery from '../containers/PasswordRecovery';
import NotFound from '../pages/NotFound';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/password-recovery" element={<PasswordRecovery />} />
                    <Route path="*" element={
                    	<div style={{ padding: "1rem" }}><p>There's nothing here!</p></div>
                    }/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App; 
*/
