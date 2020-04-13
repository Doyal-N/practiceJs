'use strict';

let money;

//функция проверки на число
const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

//спрашиваем месячный доход с проверкой    
const start = function() {
  do {
    money = prompt('Ваш месячный доход?', 50000);
  } while (!isNum(money));

};

start();

//объект
let appData = {
        income: {},
        addIncome: [],
        expenses: {},
        budget: money,
        addExpenses: [],
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        mission: 108000,
        period: 2,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,

    asking: function() {

       if (confirm('Есть ли у вас дополнительный заработок?')) {
         let itemIncome,
             cashIncome;

       itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
       
         do {
           cashIncome = prompt('Сколько в месяц на этом зарабатываете?');
       } while (!isNum(cashIncome));

         appData.income[itemIncome] = cashIncome;
       }

       let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
           appData.addExpenses = addExpenses.toLowerCase().split(', ');
           appData.deposit = confirm('Есть ли у вас депозит в банке?');

       for (let i = 0; i < 2; i++) {
       let point,
           cost;    
      point = prompt('Введите обязательную статью расходов?');
       do {
        cost = prompt('Во сколько это обойдется?');
       } while (!isNum(cost));
       appData.expenses[point] = +cost;     
      }  
    },

    getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
     },

    getBudget: function() {
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay = Math.trunc(appData.budgetMonth / 30);
      },

    getTargetMonth: function() {
          let time = appData.mission / appData.budgetMonth;
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

    getInfoDeposit: function() {
      if (appData.deposit) {
        do {
          appData.percentDeposit = prompt('Годовой процент');
          appData.moneyDeposit = prompt('Размер вклада');
        } while (!isNum(appData.percentDeposit, appData.moneyDeposit ));
 
      }
    },
 
    calcSavedMoney: function() {
     return appData.budgetMonth * appData.period;
    }
};  

//вызов методов объекта поочередно
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

//расходы за месяц, период до цели, статус
console.log(appData.expensesMonth);
console.log(appData.period);
console.log(appData.getStatusIncome());

//вывод в консоль всех свойств и значений объекта
for (let key in appData) {
    console.log('Свойство: ' + key + 'значение: ' + appData[key]);
   };


