import React from "react";

import "./Article.sass";

const Article = ({ title, text, link }) => {

    return (
        <article className="article">
            <h2 className="article__title">
                {title}
            </h2>
            <p className="article__text">
                {text}
                {
                    link &&
                    <a
                        href="https://github.com/Pro100CaHya/react-currency-converter"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="article__link link"
                    >
                        {link}
                    </a>
                }
            </p>
        </article>
    );

}

export default Article;