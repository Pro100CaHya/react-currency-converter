import React from "react";

import Select from "../UI/select/Select";
import Input from "../UI/input/Input";
import logos from "../../utils/exportLogos";

import "./Converter.sass";

const Converter = ({ quotes, conversion, setConversion }) => {

    const setCurrencyImage = (name) => {
        if (name === "") return logos.none;
        return logos[name];
    }

    const convertCurrency = (arg, flag) => {

        if (arg === "") {
            setConversion({
                ...conversion,
                value: {
                    initialValue: "",
                    requiredValue: ""
                }
            });
            return;
        }

        const regex = /^[0-9]*\.?[0-9]*$/;

        if (arg.match(regex) === null) {
            return;
        }
        
        const argExchange = parseFloat(conversion.currency.exchange);

        if (flag) {
            setConversion({
                ...conversion,
                value: {
                    initialValue: arg,
                    requiredValue: argExchange * arg
                }
            });
        }
        else {
            setConversion({
                ...conversion,
                value: {
                    initialValue: arg / argExchange,
                    requiredValue: arg
                }
            });
        }
    }

    return (
        <div className="converter row">
            <div className="converter__section row">
                <img src={logos.USD} alt="usd" className="converter__logo" title="USA Dollar" />
                <p className="converter__field">USD</p>
                <Select
                    options={quotes}
                    value={conversion.currency.name}
                    defaultValue=""
                    onKeyDowm
                    onChange={selectedCurrency => setConversion({
                        ...conversion,
                        currency: JSON.parse(selectedCurrency)
                    })}
                />
                <img
                    src={setCurrencyImage(conversion.currency.name)}
                    alt={conversion.currency.name}
                    className="converter__logo"
                    title="USA Dollar"
                />
            </div>
            <div className="converter__section converter__section_center row">
                <Input
                    className="converter__input"
                    type="tel"
                    placeholder="1"
                    value={conversion.value.initialValue}
                    onChange={(e) => convertCurrency(e.target.value, true)}
                />
                <p className="converter__symbol">=</p>
                <Input
                    className="converter__input"
                    type="tel"
                    placeholder={conversion.currency.exchange}
                    value={conversion.value.requiredValue}
                    onChange={(e) => convertCurrency(e.target.value, false)}
                />
            </div>
        </div>
    );

}


export default Converter;