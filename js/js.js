'use strict';

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;

let allBtnDisabled = document.querySelectorAll('button');

for (let a = 0; a<allBtnDisabled.length; a++) {
    allBtnDisabled[a].setAttribute('disabled', '');
}

startBtn.removeAttribute('disabled');


startBtn.addEventListener('click', function() {   
    for (let i = 0; i < allBtnDisabled.length; i++) { 
        allBtnDisabled[i].removeAttribute('disabled');
    }

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет?', '');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money;
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth()+1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

let sum = 0;

expensesBtn.addEventListener('click', function(){
    

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;    

        if ((typeof(a)) === 'string' && (typeof(a)) != null 
        && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i <= optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
    }
});

countBtn.addEventListener('click', function() {

    if (appData.budget !== undefined) {


        appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        let levelMony;

        if (appData.moneyPerDay < 1000) {            
            levelMony = "Низкий уровень достатка";
        } else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay < 2000) {
            levelMony = "Средний уровень достатка";
        } else if (appData.moneyPerDay >= 2000) {
            levelMony = "Высокий уровень достатка";
        } else {
            levelMony = "Произошла ошибка";
        }

        levelValue.textContent = levelMony;
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(", ");

    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};