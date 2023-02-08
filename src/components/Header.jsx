import React from "react";
import '../styles/Header.scss';
import Logo from '../assets/Logos/logo_yard_sale.svg';
import Icon from '../assets/Icons/icon_menu.svg';
import IconShoppingCard from '../assets/Icons/icon_shopping_cart.svg';
import IconArrow from '../assets/Icons/flechita.svg';

const Header = () => {
    return (
        <nav>
            <img src={Icon} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={Logo} alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">
                        platzi@example.com
                        <img src={IconArrow} alt="" />
                    </li>
                    <li className="navbar-shopping-cart">
                        <img src={IconShoppingCard} alt="shopping-cart" />
                        <div>8</div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
