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
    amount2 = +prompt('Во сколько это обойдется?'),
    accumulatedMonth;

//работа с функциями
const showTypeOf = function(data) {
    return typeof(data)
};

const getExpensesMonth = function() {
    return (amount1 + amount2);
};

const getAccumulatedMonth = function() {
    return (money - (amount1 + amount2));
};

accumulatedMonth = getAccumulatedMonth();

let budgetDay = Math.trunc(accumulatedMonth / 30);

const getTargetMonth = function() {
    return (mission / accumulatedMonth);
};

//ветвления
const getStatusIncome = function() {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay < 600 || budgetDay === 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return ('Что-то пошло не так');
    }
};

//вывод в консоль
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));
console.log(getExpensesMonth());
console.log(addExpenses.toLowerCase().split(', '));
console.log(Math.round(getTargetMonth()));
console.log(budgetDay);
console.log(getStatusIncome());