import React from "react";

import Main from "../components/layout/main/Main";
import Article from "../components/UI/article/Article";

const NotFound = () => {

    return (
        <Main>
            <section className="content row">
                <Article
                    title="404"
                    text="Page Not Found"
                    link={null}
                />
            </section>
        </Main>
    );

}

export default NotFound;