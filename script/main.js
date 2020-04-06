'use strict';

const isNum = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

//операции с переменными и получение данных
let money,
    income = 'анимация',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 108000,
    accumulatedMonth;

//спрашиваем месячный доход с проверкой    
const start = function () {
    do {
        money = prompt('Ваш месячный доход?');
    } while (!isNum(money));

    return money
 };

start();

//работа с функциями
const showTypeOf = function (data) {
    return typeof (data)
};

let expenses = [];

const getExpensesMonth = function () {

 let sum = 0;
 let totalSum;
           
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?');
      do {
          totalSum = prompt('Во сколько это обойдется?');
         } while (!isNum(totalSum));

        sum += +totalSum;
        
    }
     return(sum);
};

let expensesAmount = getExpensesMonth();

const getAccumulatedMonth = function () {
    return money - expensesAmount;
};

accumulatedMonth = getAccumulatedMonth();

let budgetDay = Math.trunc(accumulatedMonth / 30);

const getTargetMonth = function () {
    let time = mission / accumulatedMonth;
    if (time <= 0) {
        console.log('Цель не будет достигнута');
    }  else {
        console.log('Цель будет достигнута');
    }
};

//ветвления
const getStatusIncome = function () {
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
console.log(expensesAmount);
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);
console.log(getTargetMonth());
console.log(getStatusIncome());