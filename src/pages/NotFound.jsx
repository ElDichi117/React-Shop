import React from "react";
import '../styles/NotFound.scss'
import Icon from '../assets/Icons/icon_page_Not_Found.svg';

export const NotFound = () => {
  return (
    <div class="login">
      <div class="form-container">
        <img src={Icon} alt="logo" class="logo" />

        <h1 class="title">Ups!</h1>
        <p class="subtitle">
          Page not found
        </p>

        <div class="email-image">
          <img src={Icon} alt="email" />
        </div>

        <button class="primary-button login-button">Back Home</button>
      </div>
    </div>
  );
};

export default NotFound;