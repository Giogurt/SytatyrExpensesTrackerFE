import axios from "axios";

export const getDailyExpenses = async () => {
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (console.log(response)));
}