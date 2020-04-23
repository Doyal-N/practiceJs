'use strict';

//получение элементов документа
  let buttonCalculation = document.getElementById('start'),
      buttonCancel = document.getElementById('cancel'),
      buttonPlus_1 = document.getElementsByTagName('button')[0],
      buttonPlus_2 = document.getElementsByTagName('button')[1],
      checkbox = document.querySelector('#deposit-check'),
      strInput = document.querySelectorAll('.additional_income-item'),
      budgetMonthValue = document.querySelector('.budget_month-value'),
      dayInput = document.querySelector('.budget_day-value'),
      expensesInput = document.querySelector('.expenses_month-value'),
      incomeInput = document.getElementsByClassName('additional_income-value')[0],
      totalExpensesInput = document.getElementsByClassName('additional_expenses-value')[0],
      incomePeriodInput = document.getElementsByClassName('income_period-value')[0],
      targetInput = document.getElementsByClassName('target_month-value')[0],
      incomeMonthInput = document.querySelector('.salary-amount'),
      expensesTitleInput = document.querySelector('.expenses-title'),
      expensesItems = document.querySelectorAll('.expenses-items'),
      additionalExpensesInput = document.querySelector('.additional_expenses-item'),
      depositInput = document.querySelector('.deposit-amount'),
      percentInput = document.querySelector('.deposit-percent'),
      goalInput = document.querySelector('.target-amount'),
      incomeItem = document.querySelectorAll('.income-items'),
      rangeSelector = document.querySelector('.period-select'),
      inputText = document.querySelectorAll('input[type="text"]');

 

//функция проверки на число
const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

//объект
let appData = {
        income: {},
        incomeMonth: 0,
        addIncome: [],
        expenses: {},
        budget: 0,
        addExpenses: [],
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        budgetMonth: 0,
        budgetDay: 0,
        expensesMonth: 0,

    start: function() {
          
          appData.budget = +incomeMonthInput.value;
          
          appData.getExpenses();
          appData.getIncome();
          appData.getExpensesMonth();
          appData.getAddExpenses();
          appData.getAddIncome();
          appData.getBudget();
          appData.showResult();
          
        },

    showResult: function() {
      budgetMonthValue.value = this.budgetMonth;
      dayInput.value = Math.trunc(this.budgetDay);
      expensesInput.value = this.expensesMonth;
      totalExpensesInput.value = this.addExpenses.join(', ');
      incomeInput.value = this.addIncome.join(', ');
      targetInput.value = Math.ceil(this.getTargetMonth());
      incomePeriodInput.value = this.calcSavedMoney();
      rangeSelector.addEventListener('input', function(){
        incomePeriodInput.value = appData.calcSavedMoney();
      })
    },    

    addExpensesBlock: function() {
      let cloneExpensesItem = expensesItems[0].cloneNode(true);

      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlus_2);
      expensesItems = document.querySelectorAll('.expenses-items');   

      if (expensesItems.length === 3) {
        buttonPlus_2.style.display = 'none';
      }
    }, 

    addIncomeBlock: function() {
      let cloneincomeItem = incomeItem[0].cloneNode(true);

      incomeItem[0].parentNode.append(cloneincomeItem, buttonPlus_1);
      incomeItem = document.querySelectorAll('.income-items');
      
      if (incomeItem.length === 3) {
        buttonPlus_1.style.display = 'none';
      }
    },

    getExpenses: function() {
      expensesItems.forEach(function(item){
       let itemExpenses = item.querySelector('.expenses-title').value;
       let cashExpenses = item.querySelector('.expenses-amount').value;
       if (itemExpenses !== '' && cashExpenses !== '') {
         appData.expenses[itemExpenses] = cashExpenses;
       }
      });
    },

    getIncome: function() {
      incomeItem.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
          appData.income[itemIncome] = cashIncome;
        }
      });
           
      for (let key in appData.income) {
        appData.incomeMonth += +appData.income[key];
      }
    },  
    
    getAddExpenses: function() {
      let addExpenses = additionalExpensesInput.value.split(',');
      addExpenses.forEach(function(item){
        item = item.trim();
         if (item !== '') {
           appData.addExpenses.push(item);
         }
      });
    },

    getAddIncome: function() {
      strInput.forEach(function(item){
       let itemValue = item.value.trim();
       if (itemValue !== '') {
         appData.addIncome.push(itemValue);
       }
      });
    },

    getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
     },

    getBudget: function() {
      this.budgetMonth = (this.budget + this.incomeMonth) - this.expensesMonth;
      this.budgetDay = Math.trunc(this.budgetMonth / 30);
      },

    getTargetMonth: function() {
         return goalInput.value / this.budget
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
      appData.deposit = confirm('Есть ли у вас депозит в банке?');
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
     return this.budgetMonth * rangeSelector.value
    },

    periodSelect: function() {
     let range = document.querySelector('.period-select').value;
     let titleAmount = document.querySelector('.period-amount');

     titleAmount.textContent= range;
   },

    clickStart: function() {
      if (incomeMonthInput.value === '') {
        alert('Поле "Месячный доход" обязательно для заполнения!')
      } else {
        return
      }
    },
    
    blockInputs: function() {
     inputText = document.querySelectorAll('input[type="text"]');
      inputText.forEach(function(item){
        item.disabled = true;
      })
      buttonCalculation.style.display = 'none';
      buttonCancel.style.display = 'block';
    },

    resetData: function() {
      //обнуляем инпуты
     inputText = document.querySelectorAll('input[type="text"]')
     inputText.forEach(function(item){
       item.disabled = false;
       item.value = '';
     });
     //возвращаем кнопку Рассчитать
     buttonCalculation.style.display = 'block';
     buttonCancel.style.display = 'none';
     //убираем допстроки
     incomeItem = document.querySelectorAll('.income-items');
      for (let i = 1; incomeItem.length > i; i++) {
      incomeItem[i].remove()
      }   
     expensesItems = document.querySelectorAll('.expenses-items');
      for (let i = 1; expensesItems.length > i; i++) {
        expensesItems[i].remove()
      } 

      //возвращаем кнопки +
      buttonPlus_1.style.display = 'block';
      buttonPlus_2.style.display = 'block';

      //скидываем ползунок
      let range = document.querySelector('.period-select'),
          titleAmount = document.querySelector('.period-amount');

       range.value =  1; 
       titleAmount.textContent = 1;   
               
    }

}; 

buttonCalculation.addEventListener('click', appData.start.bind(start));
buttonCalculation.addEventListener('click', appData.blockInputs);
buttonCalculation.addEventListener('click', appData.clickStart);
buttonPlus_2.addEventListener('click', appData.addExpensesBlock);
buttonPlus_1.addEventListener('click', appData.addIncomeBlock);
rangeSelector.addEventListener('input', appData.periodSelect);
buttonCancel.addEventListener('click', appData.resetData);











 


