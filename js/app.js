'use strict';
let money, time;

let btnStart = document.getElementById('start'),

    budgetResult = document.getElementsByClassName('budget-value')[0],
    daybudgetResult = document.getElementsByClassName('daybudget-value')[0],
    leveResultl = document.getElementsByClassName('level-value')[0],
    expensesResult = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesResult = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeResult = document.getElementsByClassName('income-value')[0],
    monthsavingsResult = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsResult = document.getElementsByClassName('yearsavings-value')[0],

    expenses = document.getElementsByClassName('expenses-item'),

    btnAdoptAlways = document.getElementsByTagName('button')[0],
    btnAdoptOptionally = document.getElementsByTagName('button')[1],
    btnAdoptCompute = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    income = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    summ = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let firstStart = [btnAdoptAlways, btnAdoptOptionally, btnAdoptCompute];


for (let item of firstStart) {
    item.disabled = true;
};




btnStart.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    };
    appData.moneyData = money;
    appData.timeData = time;
    budgetResult.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();

    for (let item of firstStart) {
        item.disabled = false;
    };
});






btnAdoptAlways.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expenses.length; i++) {
        let item = expenses[i].value;
        let price = expenses[++i].value;

        if (typeof (item) === 'string' && typeof (item) != null && typeof (price) != null &&
            item != '' && price != '' && item.length < 30) {
            appData.expenses[item] = price;
            sum += +price;
        } else {
            i = i - 1;
        };
    };
    expensesResult.textContent = sum;
    appData.expensesSum = sum;
});




btnAdoptOptionally.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;

        if (opt != '' && typeof (opt) != null && typeof (opt) === 'string') {
            appData.optionalExpenses[i] = opt;
        } else {
            i = i - 1
        };
        optionalexpensesResult.textContent += appData.optionalExpenses[i] + ' ';
    };
});



btnAdoptCompute.addEventListener('click', function () {

    if (appData.moneyData != undefined) {
        appData.moneyPerDay = ((appData.moneyData - appData.expensesSum) / 30).toFixed();
        daybudgetResult.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay <= 1000) {
            leveResultl.textContent = ('Минимально');
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay <= 2000) {
            leveResultl.textContent = ('Средне');
        } else if (appData.moneyPerDay > 2000) {
            leveResultl.textContent = ('Норм');
        } else {
            leveResultl.textContent = ('Ошибка');
        };
    } else {
        daybudgetResult.textContent = ('Ошибка');
    };
});






income.addEventListener('input', function () {
    let items = income.value;
    // if (typeof (items) === 'string' && typeof (items) != null && items != '');
    appData.income = items.split(', ');
    incomeResult.textContent = appData.income;
});





savings.addEventListener('click', function () {
    if (appData.saving == false) {
        appData.saving = true;
    } else if (appData.saving == true) {
        appData.saving = false;
    };
});





summ.addEventListener('input', function () {
    if (appData.saving == true) {
        let sum = +summ.value,
            perc = +percent.value;

        appData.monthIncome = sum / 100 / 12 * perc;
        appData.yearIncome = sum / 100 * perc;

        monthsavingsResult.textContent = appData.monthIncome.toFixed(1);
        yearsavingsResult.textContent = appData.yearIncome.toFixed(1);
    }
});




percent.addEventListener('input', function () {
    if (appData.saving == true) {
        let sum = +summ.value,
            perc = +percent.value;

        appData.monthIncome = sum / 100 / 12 * perc;
        appData.yearIncome = sum / 100 * perc;

        monthsavingsResult.textContent = appData.monthIncome.toFixed(1);
        yearsavingsResult.textContent = appData.yearIncome.toFixed(1);
    }

});


let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
    // chooseExpenses: function () {


    // },
    // detectDayBudget: function () {

    //     alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    // },
    // detectLevel: function () {
    //     if (appData.moneyPerDay <= 1000) {
    //         console.log('Минимально');
    //     } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay <= 2000) {
    //         console.log('Средне');
    //     } else if (appData.moneyPerDay > 2000) {
    //         console.log('Норм');
    //     } else {
    //         console.log('Ошибка');
    //     };
    // },
    // chekSavings: function () {
    //     if (appData.saving == true) {
    //         let save = +prompt('Какова сумма накоплений?', '');
    //         let percent = +prompt('Под какой процент?', '');

    //         appData.monthIncome = save / 100 / 12 * percent;
    //         alert('Доход в месяц: ' + appData.monthIncome);
    //     };
    // },
    // chooseOptExpenses: function () {

    // },
    // chooseIncome: function () {

    // appData.income.push(prompt('Может что-то ещё?', ''));
    // appData.income.sort();
    // appData.income.forEach(function (item, i) {
    //     alert('Способы доп. заработка: ' + (i + 1) + ': ' + item);
    // };

    // },

};