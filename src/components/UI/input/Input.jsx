import React from "react";

import "./Input.sass";

const Input = ({ className, type, placeholder, onChange, value }) => {

    return (
        <input
            className={`${className} input`}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );

}

export default Input;