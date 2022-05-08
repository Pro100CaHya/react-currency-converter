import React from "react";

import "./Input.sass";

const Input = ({ className, type, placeholder, onChange, value, disabled }) => {

    return (
        <input
            className={`${className} input`}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
        />
    );

}

export default Input;