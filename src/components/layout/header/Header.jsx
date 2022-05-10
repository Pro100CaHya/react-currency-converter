import React from "react";
import { Link } from "react-router-dom";

import logos from "../../../utils/exportLogos";

import "./Header.sass";

const Header = () => {

    const openMenu = () => {
        document.querySelector(".header__nav")
            .classList
            .toggle("nav_active");

        document.querySelector(".header__menu-button")
            .classList
            .toggle("header__menu-button_active");

        document.querySelector(".header")
            .classList
            .toggle("header_active");

        document.querySelector(".body")
            .classList
            .toggle("body_hidden");
    }

    return (
        <header className="header">
            <div className="header__content">
                <div className="header__row row">
                    <Link className="link" to="/">
                        <img
                            className="header__logo"
                            src={logos.ReactCurrencyConverter}
                            alt="logo"
                            title="React Currency Converter Logo"
                        />
                    </Link>
                    <h2 className="header__title">
                        React Currency Converter
                    </h2>
                    <nav className="header__nav nav">
                        <ul className="nav__list list row">
                            <li className="nav__item">
                                <Link
                                    className="nav__link link"
                                    to="/currencies"
                                >
                                    Main
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link
                                    className="nav__link link"
                                    to="/about"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__menu-button" onClick={openMenu}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header >
    );

}

export default Header;