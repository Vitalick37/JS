'use strict';
let money, time;

let btnStart = document.getElementById('start'),

    budgetResult = document.getElementsByClassName('budget-value'),
    daybudgetResult = document.getElementsByClassName('daybudget-value'),
    leveResultl = document.getElementsByClassName('level-value'),
    expensesResult = document.getElementsByClassName('expenses-value'),
    optionalexpensesResult = document.getElementsByClassName('optionalexpenses-value'),
    incomeResult = document.getElementsByClassName('income-value'),
    monthsavingsResult = document.getElementsByClassName('monthsavings-value'),
    yearsavingsResult = document.getElementsByClassName('yearsavings-value'),

    expenses = document.getElementsByClassName('expenses-item'),

    btnAdoptAlways = document.getElementsByTagName('button')[0],
    btnAdoptOptionally = document.getElementsByTagName('button')[1],
    btnAdoptCompute = document.getElementsByTagName('button')[2],
    optionalexpenses = document.querySelectorAll('.optionalexpenses-item'),

    income = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    summ = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');


function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    };
};
start();

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let item = prompt('Введите обязательную статью расходов в этом месяце', '');
            let price = prompt('Во сколько обойдется?', '');

            if (typeof (item) === 'string' && typeof (item) != null && typeof (price) != null &&
                item != '' && price != '' && item.length < 30) {
                appData.expenses[item] = price;
                console.log('done');
            } else {
                i = i - 1;
            };
        };
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.moneyData / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay <= 1000) {
            console.log('Минимально');
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay <= 2000) {
            console.log('Средне');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Норм');
        } else {
            console.log('Ошибка');
        };
    },
    chekSavings: function () {
        if (appData.saving == true) {
            let save = +prompt('Какова сумма накоплений?', '');
            let percent = +prompt('Под какой процент?', '');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц: ' + appData.monthIncome);
        };
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let opt = prompt('Статья необязательных расходов?', '');
            if (opt != '' && typeof (opt) != null && typeof (opt) === 'string') {
                appData.optionalExpenses[i] = opt;
            } else {
                i = i - 1
            };
        };
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if (typeof(items) === 'string' && typeof(items) != null && items != '') {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то ещё?', ''));
            appData.income.sort();
            appData.income.forEach(function(item, i) {
                alert('Способы доп. заработка: ' + (i + 1) + ': ' + item);
            });
        } else {
            alert('Ошибка')
        };
       
    },
};
for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
};









