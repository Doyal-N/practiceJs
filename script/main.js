'use strict';

//операции с переменными и получение данных
let accumulatedMonth,
   expensesAmount;

//массив
let appData = {
    income: {},
    addIncome: [],
    expenses: [],
    budget: money,
    addExpenses: [],
    deposit: false,
    mission: 108000,
    period: 2,
    asking: function() {
       let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую')
           appData.addExpenses = addExpenses.toLowerCase().split(', ')
           appData.deposit = confirm('Есть ли у вас депозит в банке?')
    },
    budgetDay: 0,
    budgetMonth = 0,
    expensesMonth = 0

};    
    
const isNum = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

//спрашиваем месячный доход с проверкой    
const start = function () {
  do {
    appData.budget = prompt('Ваш месячный доход?');
  } while (!isNum(appData.budget));

};
start();

//работа с функциями
// expenses = [];

const getExpensesMonth = function() {

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

expensesAmount = getExpensesMonth();

const getAccumulatedMonth = function() {
    return appData.budget - expensesAmount;
};

accumulatedMonth = getAccumulatedMonth();

appData.budgetDay = Math.trunc(accumulatedMonth / 30);

const getTargetMonth = function() {
    let time = appData.mission / accumulatedMonth;
    if (time <= 0) {
        return 'Цель не будет достигнута';
    }  else {
        return 'Цель будет достигнута';
    }
};

//ветвления
const getStatusIncome = function() {
    if (appData.budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (appData.budgetDay >= 600) {
        return ('У вас средний уровень дохода');
    } else if (appData.budgetDay < 600 || budgetDay === 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return ('Что-то пошло не так');
    }
};

//вывод в консоль
console.log('Расходы за месяц ' + expensesAmount);
console.log(appData.budgetDay);
console.log(getTargetMonth());
console.log(getStatusIncome());