'use strict';

//получение элементов документа
const buttonCalculation = document.getElementById('start'),
      buttonPlus_1 = document.getElementsByTagName('button')[0],
      buttonPlus_2 = document.getElementsByTagName('button')[1],
      checkbox = document.querySelector('#deposit-check'),
      strInput = document.querySelectorAll('.additional_income-item'),
      dayInput = document.getElementsByClassName('budget_day-value')[0],
      expensesInput = document.getElementsByClassName('expenses_month-value')[0],
      incomeInput = document.getElementsByClassName('additional_income-value')[0],
      totalExpensesInput = document.getElementsByClassName('additional_expenses-value')[0],
      incomePeriodInput = document.getElementsByClassName('income_period-value')[0],
      targetInput = document.getElementsByClassName('target_month-value')[0],
      incomeMonthInput = document.querySelector('.salary-amount'),
      incomeTitleInput = document.querySelector('.income-title'),
      incomeAmountInput = document.querySelector('.income-amount'),
      expensesTitleInput = document.querySelector('.expenses-title'),
      expensesAmountInput = document.querySelector('.expenses-amount'),
      additionalExpensesInput = document.querySelector('.additional_expenses-item'),
      depositInput = document.querySelector('.deposit-amount'),
      percentInput = document.querySelector('.deposit-percent'),
      goalInput = document.querySelector('.target-amount'),
      rangeSelector = document.querySelector('.period-select');

//функция проверки на число
const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

//объект
let appData = {
        income: {},
        addIncome: [],
        expenses: {},
        budget: 0,
        addExpenses: [],
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        mission: 108000,
        period: 2,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,

    start: function() {
       if (incomeMonthInput.value === '') {
         alert('Поле "Месячный доход" обязательно для заполнения!')
         return
       }

          appData.budget = incomeMonthInput.value;
          console.log(incomeMonthInput.value);

          // appData.asking();
          // appData.getExpensesMonth();
          // appData.getBudget();
          // appData.getTargetMonth();
          // appData.getStatusIncome();
        },

    asking: function() {
       if (confirm('Есть ли у вас дополнительный заработок?')) {
         let itemIncome,
             cashIncome;
         do { 
           itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
          } while (isNum(itemIncome));         

         do {
           cashIncome = prompt('Сколько в месяц на этом зарабатываете?');
       } while (!isNum(cashIncome));

         appData.income[itemIncome] = cashIncome;
       }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
    appData.addExpenses = appData.addExpenses.map(word => word.trim());
    appData.addExpenses = appData.addExpenses.map(word => word.charAt(0).toUpperCase() + word.slice(1));     

    console.log(appData.addExpenses.join(', '));

    appData.deposit = confirm('Есть ли у вас депозит в банке?');

       for (let i = 0; i < 2; i++) {
       let point,
           cost;
        do {
          point = prompt('Введите обязательную статью расходов?'); 
        } while (isNum(point));            

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
         } while (!isNum(appData.percentDeposit));
        do {
          appData.moneyDeposit = prompt('Размер вклада');
        } while (!isNum(appData.moneyDeposit)); 
      }
    },

    calcSavedMoney: function() {
     return appData.budgetMonth * appData.period;
    },

}; 

buttonCalculation.addEventListener('click', appData.start);






// //вывод в консоль всех свойств и значений объекта
// for (let key in appData) {
//     console.log('Свойство: ' + key + 'значение: ' + appData[key]);
//    };


