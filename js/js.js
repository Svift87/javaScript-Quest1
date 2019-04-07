let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let i = 0;

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');

//     if ((typeof(a)) === 'string' && (typeof(a)) != null 
//     && (typeof(b)) != null && a != '' && a.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         alert('Введены некоректные данные, повторите попытку еще раз');
//     }
// }

// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');

//     if ((typeof(a)) === 'string' && (typeof(a)) != null 
//     && (typeof(b)) != null && a != '' && a.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         alert('Введены некоректные данные, повторите попытку еще раз');
//     } 
//     i++;
// }

do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null 
    && (typeof(b)) != null && a != '' && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        alert('Введены некоректные данные, повторите попытку еще раз');
    } 
    i++;
} 
while (i < 2)

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);