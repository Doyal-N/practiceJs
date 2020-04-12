'use strict';

let money;

//функция проверки на число
const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

//спрашиваем месячный доход с проверкой    
const start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!isNum(money));

};

start();

//массив
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    budget: money,
    addExpenses: [],
    deposit: false,
    mission: 108000,
    period: 2,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,

    asking: function() {
       let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
           appData.addExpenses = addExpenses.toLowerCase().split(', ');
           appData.deposit = confirm('Есть ли у вас депозит в банке?');

       for (let i = 0; i < 2; i++) {
           let point, cost;
        point = prompt('Введите обязательную статью расходов?');
         do {
          cost = prompt('Во сколько это обойдется?');
          } while (!isNum(cost));
       }  
       appData.expenses[point] = +cost;
    },

    getExpensesMonth: function() {
        for (let key in appData.expenses) {
          let result = 0;
          result += appData.expenses[key];
         }
         return result;
         console.log(result);         
     },

    getAccumulatedMonth: function() {
      return appData.budget - appData.expenses;
         },
    getTargetMonth: function() {
          let time = appData.mission / appData.getAccumulatedMonth();
          if (time <= 0) {
              return 'Цель не будет достигнута';
          }  else {
              return 'Цель будет достигнута';
          }
      },

    getStatusIncome: function() {
        if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay >= 600) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay < 600 || budgetDay === 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что-то пошло не так');
        }
    },
 
};   

appData.asking();
console.log(appData.expensesMonth);

appData.budgetDay = Math.trunc(appData.getAccumulatedMonth() / 30);


// //вывод в консоль
// console.log(appData.budgetDay);
// console.log(appData.getTargetMonth());
// console.log(appData.getStatusIncome());

