import React from "react";

import "./Select.sass";

const Select = ({options, value, defaultValue, onChange}) => {

    return (
        <select
            className="converter__field select"
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {
                options.map(quote =>
                    <option
                        value={quote.name}
                        key={quote.id}
                    >
                        {quote.name}
                    </option>
                )
            }
        </select>
    );

}

export default Select;