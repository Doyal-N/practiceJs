'use strict';

const isNum = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

//операции с переменными и получение данных
let money,
    income = 'анимация',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 108000,
    accumulatedMonth;

let start = function() {
    money = prompt('Ваш месячный доход?');

    while (!isNum(money)) {
        money = prompt('Ваш месячный доход?');
    }
};

start();
   
//работа с функциями
const showTypeOf = function(data) {
    return typeof (data)
};

let expenses = [];

const getExpensesMonth = function() {

    let sum = 0;
    
    for (let i = 0; i < 2; i++) {
      
     expenses[i] = prompt('Введите обязательную статью расходов?');    

     sum += +prompt('Во сколько это обойдется?');

    };
    console.log(sum);
    return sum;
};

let expensesAmount = getExpensesMonth();

const getAccumulatedMonth = function() {
    return money - expensesAmount;
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
console.log(addExpenses.toLowerCase().split(', '));
console.log(Math.round(getTargetMonth()));
console.log(budgetDay);
console.log(getStatusIncome());