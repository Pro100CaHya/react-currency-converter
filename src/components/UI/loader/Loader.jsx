import React from "react";

import "./Loader.sass"

const Loader = ({ className = "" }) => {

    return (
        <div className={`loader ${className}`}></div>
    );

}

export default Loader;