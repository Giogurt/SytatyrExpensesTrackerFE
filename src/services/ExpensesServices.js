import axios from "axios";

axios.defaults.headers.get['header-name'] = 'value'

export const getDailyExpenses = async () => {
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (console.log(response)));
}

export const getMonthlyExpenses = async () => {
    axios
        .get('https://sytatyr-expense-tracker-be.herokuapp.com/expenses/0')
        .then(response => (console.log(response)));
}