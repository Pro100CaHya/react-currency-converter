import React, { useState, useEffect } from "react";

import Main from "../components/layout/main/Main";
import Converter from "../components/converter/Converter";
import Table from "../components/UI/table/Table";

import CurrencyService from "../API/currencyService";
import filterCurrencies from "../utils/currencies";

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

    useEffect(() => {
        setTimeout(async () => {
            let data = await CurrencyService.getAll();
            const filteredKeys = [
                "USDAUD", "USDGBP", "USDBRL", "USDHUF", "USDHKD", "USDDKK",
                "USDEUR", "USDILS", "USDINR", "USDIDR", "USDCAD", "USDCNY",
                "USDKRW", "USDMYR", "USDMXN", "USDNZD", "USDNOK", "USDPKR",
                "USDPLN", "USDRUB", "USDSGD", "USDTWD", "USDTHB", "USDTRY",
                "USDPHP", "USDCZK", "USDCLP", "USDSEK", "USDCHF", "USDZAR",
                "USDJPY"
            ];
            data = filterCurrencies(filteredKeys, data.quotes);
            setQuotes(data);
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