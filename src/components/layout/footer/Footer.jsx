import React from "react";

import logos from "../../../utils/exportLogos";

import "./Footer.sass";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__row row">
                <p className="footer__text">2022© Project by Pro100CaHya</p>
                <a
                    href="https://github.com/Pro100CaHya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link link"
                >
                    <img
                        className="footer__logo"
                        src={logos.myOwnLogo}
                        alt="Pro100CaHya"
                        title="My site"
                    />
                </a>
                <a
                    href="https://github.com/Pro100CaHya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link link"
                >
                    <img
                        className="footer__logo"
                        src={logos.githubLogo}
                        alt="Github"
                        title="My github"
                    />
                </a>
            </div>
        </footer>
    );

}

export default Footer;