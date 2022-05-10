import React from "react";

import Main from "../components/layout/main/Main";
import Article from "../components/UI/article/Article";

const About = () => {

    return (
        <Main>
            <section className="content row">
                <Article
                    title="About"
                    text="It's a demo converter app on ReactJS. "
                    link="Source code"
                />
            </section>
        </Main>
    );

}

export default About;