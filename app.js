'use strict';
let money, time;
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
    saving: true
};
function chooseExpenses () {
for (let i = 0; i < 2; i++) {
    let item = prompt('Введите обязательную статью расходов в этом месяце', '');
    let price = prompt('Во сколько обойдется?', '');

    if (typeof (item) === 'string' && typeof (item) != null && typeof (price) != null
        && item != '' && price != '' && item.length < 30) {
        appData.expenses[item] = price;
        console.log('done');
    } else {
        i = i - 1;
    };
};
};
chooseExpenses();

function detectDayBudget () {
appData.moneyPerDay = (appData.moneyData / 30).toFixed();
alert('Ежедневный бюджет: ' + appData.moneyPerDay);
};
detectDayBudget();

function detectLevel () {
if (appData.moneyPerDay <= 1000) {
    console.log('Минимально');
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay <= 2000) {
    console.log('Средне');
} else if (appData.moneyPerDay > 2000) {
    console.log('Норм');
} else {
    console.log('Ошибка');
};
};
detectLevel();


function chekSavings () {
    if (appData.saving == true) {
      let save = +prompt('Какова сумма накоплений?', ''); 
      let percent = +prompt('Под какой процент?', ''); 

      appData.monthIncome = save/100/12*percent;
      alert('Доход в месяц: ' + appData.monthIncome);
    };
};
chekSavings();

function chooseOptExpenses () {
    for (let i = 1; i <= 3; i++) {
        let opt = prompt('Статья необязательных расходов?', '');
        if (opt != '' && typeof(opt) != null && typeof(opt) === 'string') {
        appData.optionalExpenses[i] = opt;
        } else {
            i = i - 1
        };
    };
};
chooseOptExpenses();