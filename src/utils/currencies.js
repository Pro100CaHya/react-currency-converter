const filterCurrencies = (filterParams, currencies) => {

    const filteredCurrencies = [];

    for (const key in currencies) {
        if (filterParams.includes(key)) {
            const name = key.slice(3, 6);
            filteredCurrencies.push({
                name: name,
                exchange: currencies[key],
                id: filteredCurrencies.length
            });
        }
    }

    return filteredCurrencies;

}

export default filterCurrencies;