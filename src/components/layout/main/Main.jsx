import React from "react";

import "./Main.sass";

const Main = ({ children }) => {

    return (
        <main className="main">
            {children}
        </main>
    );

}

export default Main;