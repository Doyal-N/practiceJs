'use strict';

//операции с переменными и получение данных
let money = +prompt('Ваш месячный доход?'),
    income = 'анимация',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 108000,
    expenses1 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount2 = +prompt('Во сколько это обойдется?');

 
//работа с функциями
let getExpensesMonth = function(amount1, amount2) {
    return (amount1 + amount2);
}

let accumulatedMonth = function(money, amount1, amount2) {
    return (money - (amount1 - amount2));
}
    
let period = Math.round(mission / accumulatedMonth);
let budgetDay = Math.trunc(accumulatedMonth / 30);

let getTargetMonth = function(accumulatedMonth, period) {
    return (accumulatedMonth / period);
}

//ветвления
let getStatusIncome = function(budgetDay) {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay < 600 || budgetDay === 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return ('Что-то пошло не так');
    }
}

//вывод в консоль
console.log(typeof (money), typeof (income), typeof (deposit));
console.log(getExpensesMonth(amount1, amount2));
console.log(addExpenses.toLowerCase().split(', '));
console.log(getTargetMonth(accumulatedMonth, period));
console.log(budgetDay);
console.log(getStatusIncome(budgetDay)); 