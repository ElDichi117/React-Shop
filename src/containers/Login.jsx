/* Para crear esta extructura usar el atajo rafce 
    En react todas las etiquetas se deben de cerrar
*/

import React from 'react';
import '../styles/Login.scss';
import Logo from '../assets/Logos/logo_yard_sale.svg';
const login = () => {
  return (
    <div className="login">
        <div className="form-container">
            <img src={Logo} alt="logo" className="logo" />
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new passwrd for you account</p>
            <form action="/" className="form">
                <label htmlFor="password" className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input input-password" />
                <label htmlFor="new-password" className="label">Password</label>
                <input type="password" id="new-password" placeholder="*********" className="input input-password" />
                <input type="submit" value="Confirm" className="primary-button login-button" />
            </form>
        </div>
    </div>
  );
};

export default login;