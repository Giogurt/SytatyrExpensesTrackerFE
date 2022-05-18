import axios from "axios";

axios.defaults.headers.get['header-name'] = 'value'


export const getDailyExpenses = async (token, userId) => {
    const config = {
        headers: {Authorization: "Bearer " + token}
    }
    return axios
        .get(`https://sytatyr-expense-tracker-be.herokuapp.com/expense/day/${userId}`, config)
        .then(response => (response.data));
}

export const getAllExpenses = async (token, userId) => {
    const config = {
        headers: {Authorization: "Bearer " + token}
    }
    return axios
        .get(`https://sytatyr-expense-tracker-be.herokuapp.com/expense/all/${userId}`, config)
        .then(response => (response.data));
}

export const getMonthlyExpenses = async (token, userId) => {
    const config = {
        headers: {Authorization: "Bearer " + token}
    }
    return axios
        .get(`https://sytatyr-expense-tracker-be.herokuapp.com/expense/month/${userId}`, config)
        .then(response => (response.data));
}

export const addNewEspense = async (token, userId, recipient, amount, reason, category, method, date, notes) => {
    const config = {
        headers: {Authorization: "Bearer " + token}
    }
    return axios
        .post(`https://sytatyr-expense-tracker-be.herokuapp.com/expense/${userId}`,{
            recipient: recipient,
            amount: amount,
            reason: reason,
            category: category,
            method: method,
            date: date,
            notes: notes
        }, config)
        .then(response => (response.data));
}

export const updateExpense = async (token, expenseId, recipient, amount, reason, category, method, date, notes) => {
    const config = {
        headers: {Authorization: "Bearer " + token}
    }
    return axios
        .put(`https://sytatyr-expense-tracker-be.herokuapp.com/expense/${expenseId}`,{
            recipient: recipient,
            amount: amount,
            reason: reason,
            category: category,
            method: method,
            date: date,
            notes: notes
        }, config)
        .then(response => (response.data));
}