export default class CurrencyService {

    static getAll() {
        const responce = fetch("http://api.currencylayer.com/live?access_key=1c42e98a316a9c12140e8231db49562b")
            .then(response => response.json())
            .then(json => json);
        return responce;
    }

}