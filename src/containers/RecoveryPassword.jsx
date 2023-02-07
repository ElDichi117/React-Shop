import React from "react";
import '../styles/RecoveryPassword.scss';
import Logo from '../assets/Logos/logo_yard_sale.svg';
import Icon from '../assets/Icons/email.svg';
const RecoveryPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={Logo} alt="logo" className="logo" />

        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>

        <div className="email-image">
          <img src={Icon} alt="email" />
        </div>

        <button className="primary-button login-button">Login</button>

        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default RecoveryPassword;
