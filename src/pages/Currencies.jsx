import React, { useState, useEffect } from "react";

import Main from "../components/layout/main/Main";
import Converter from "../components/converter/Converter";
import Table from "../components/UI/table/Table";

const Currencies = () => {

    const [quotes, setQuotes] = useState(null);
    const [conversion, setConversion] = useState({
        currency: {
            name: "",
            exchange: ""
        },
        value: {
            initialValue: "",
            requiredValue: ""
        }
    });

    useEffect(async => {
        setTimeout(() => {
            fetch("http://api.currencylayer.com/live?access_key=1c42e98a316a9c12140e8231db49562b")
                .then(response => response.json())
                .then(json => json.quotes)
                .then(currencies => {
                    const filteredCurrencies = []
                    const filteredKeys = [
                        "USDAUD", "USDGBP", "USDBRL", "USDHUF", "USDHKD", "USDDKK",
                        "USDEUR", "USDILS", "USDINR", "USDIDR", "USDCAD", "USDCNY",
                        "USDKRW", "USDMYR", "USDMXN", "USDNZD", "USDNOK", "USDPKR",
                        "USDPLN", "USDRUB", "USDSGD", "USDTWD", "USDTHB", "USDTRY",
                        "USDPHP", "USDCZK", "USDCLP", "USDSEK", "USDCHF", "USDZAR",
                        "USDJPY"
                    ];
                    for (const key in currencies) {
                        if (filteredKeys.includes(key)) {
                            const name = key.slice(3, 6);
                            filteredCurrencies.push({
                                name: name,
                                exchange: currencies[key],
                                id: filteredCurrencies.length
                            })
                        }
                    }
                    setQuotes(filteredCurrencies);
                })
        }, 1500);
    }, []);

    return (
        <Main>
            {
                quotes === null ? "" :
                    <section className="content row currency">
                        <Converter
                            quotes={quotes}
                            conversion={conversion}
                            setConversion={setConversion}
                        />
                        <Table quotes={quotes} />
                    </section>
            }
        </Main>
    );

}

export default Currencies;