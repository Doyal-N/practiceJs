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
      expensesTitle = document.querySelectorAll('.expenses-title'),
      expensesAmount = document.querySelectorAll('.expenses-amount'),
      expensesItems = document.querySelectorAll('.expenses-items'),
      additionalExpensesInput = document.querySelector('.additional_expenses-item'),
      depositInput = document.querySelector('.deposit-amount'),
      percentInput = document.querySelector('.deposit-percent'),
      goalInput = document.querySelector('.target-amount'),
      incomeItem = document.querySelectorAll('.income-items'),
      incomeTitle = document.querySelectorAll('.income-title'),
      incomeAmount = document.querySelectorAll('.income-amount'),
      rangeSelector = document.querySelector('.period-select'),
      inputText = document.querySelectorAll('input[type="text"]');

const AppData = function() {
    this.incomeMonth = 0;
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.budget = 0;
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budgetMonth = 0;
    this.budgetDay = 0;
    this.expensesMonth = 0;

};

AppData.prototype.clickStart = function() {
  if (incomeMonthInput.value === '') {
   alert('Поле "Месячный доход" обязательно для заполнения!')
  } else {
   return
   }
};

AppData.prototype.start = function() {
          
  this.budget = +incomeMonthInput.value;
      
  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();
  this.showResult();
 };  

AppData.prototype.btnClear = function() {
  inputText = document.querySelectorAll('input[type="text"]');
  inputText.forEach(function(item){
  item.disabled = true;
   });

  buttonCalculation.style.display = 'none';
  buttonCancel.style.display = 'block';
 };

AppData.prototype.showResult = function() {
  const _this = this;
  budgetMonthValue.value = this.budgetMonth;
  dayInput.value = Math.trunc(this.budgetDay);
  expensesInput.value = this.expensesMonth;
  totalExpensesInput.value = this.addExpenses.join(', ');
  incomeInput.value = this.addIncome.join(', ');
  targetInput.value = Math.ceil(this.getTargetMonth());
  incomePeriodInput.value = this.calcSavedMoney();
  rangeSelector.addEventListener('input', function(){
  incomePeriodInput.value = _this.calcSavedMoney();
  })
      
  };

AppData.prototype.addExpensesBlock = function() {
  let cloneExpensesItem = expensesItems[0].cloneNode(true);

  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlus_2);
  //добавляем поля уже пустые, аналогично в Income
  expensesTitle.forEach(function(item){
    item.value = '';
  });
  expensesAmount.forEach(function(item){
    item.value = '';
  });

  expensesItems = document.querySelectorAll('.expenses-items');   
  if (expensesItems.length === 3) {
    buttonPlus_2.style.display = 'none';
  }
};

AppData.prototype.addIncomeBlock = function() {
  let cloneincomeItem = incomeItem[0].cloneNode(true);
     
  incomeItem[0].parentNode.append(cloneincomeItem, buttonPlus_1);
  incomeTitle.forEach(function(item){
    item.value = '';
  })
  incomeAmount.forEach(function(item){
    item.value = '';
  })

  incomeItem = document.querySelectorAll('.income-items');
  if (incomeItem.length === 3) {
    buttonPlus_1.style.display = 'none';
  }
};

AppData.prototype.getExpenses = function() {
  const _this = this;
  expensesItems.forEach(function(item){
   let itemExpenses = item.querySelector('.expenses-title').value;
   let cashExpenses = item.querySelector('.expenses-amount').value;
   if (itemExpenses !== '' && cashExpenses !== '') {
     _this.expenses[itemExpenses] = cashExpenses;
   }
  });
};

AppData.prototype.getIncome = function() {
  const _this = this;
  incomeItem.forEach(function(item){
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if (itemIncome !== '' && cashIncome !== '') {
      _this.income[itemIncome] = cashIncome;
    }
  });
       
  for (let key in this.income) {
    this.incomeMonth += +this.income[key];
  }
}; 

AppData.prototype.getAddExpenses = function() {
  let addExpenses = additionalExpensesInput.value.split(',');
  const _this = this;
  addExpenses.forEach(function(item){
    item = item.trim();
     if (item !== '') {
       _this.addExpenses.push(item);
     }
  });
};

AppData.prototype.getAddIncome = function() {
  const _this = this;
  strInput.forEach(function(item){
   let itemValue = item.value.trim();
   if (itemValue !== '') {
     _this.addIncome.push(itemValue);
   }
  });
};

AppData.prototype.getExpensesMonth = function() {
  for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
  }
};

AppData.prototype.getBudget = function() {
  this.budgetMonth = (this.budget + this.incomeMonth) - this.expensesMonth;
  this.budgetDay = Math.trunc(this.budgetMonth / 30);
  };

AppData.prototype.getTargetMonth = function() {
  return goalInput.value / this.budget
};  

AppData.prototype.getStatusIncome = function() {
  if (this.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
  } else if (this.budgetDay >= 600) {
      return ('У вас средний уровень дохода');
  } else if (this.budgetDay < 600 || budgetDay === 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
  } else {
      return ('Что-то пошло не так');
  }
 };

AppData.prototype.getInfoDeposit = function() {
  this.deposit = confirm('Есть ли у вас депозит в банке?');
  if (this.deposit) {
    do {
      this.percentDeposit = prompt('Годовой процент');
     } while (!isNum(this.percentDeposit));
    do {
      this.moneyDeposit = prompt('Размер вклада');
    } while (!isNum(this.moneyDeposit)); 
  }
};

AppData.prototype.calcSavedMoney = function() {
  return this.budgetMonth * rangeSelector.value
 };

AppData.prototype.periodSelect = function() {
  let range = document.querySelector('.period-select').value;
  let titleAmount = document.querySelector('.period-amount');

  titleAmount.textContent= range;
};

AppData.prototype.resetData = function() {
  //обнуляем инпуты
 inputText = document.querySelectorAll('input[type="text"]');
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
           
};

AppData.prototype.eventListeners = function() {
  buttonCalculation.addEventListener('click', appData.clickStart);
  buttonCalculation.addEventListener('click', appData.start.bind(appData));
  buttonCalculation.addEventListener('click', appData.btnClear);
  buttonPlus_2.addEventListener('click', appData.addExpensesBlock);
  buttonPlus_1.addEventListener('click', appData.addIncomeBlock);
  rangeSelector.addEventListener('input', appData.periodSelect);
  buttonCancel.addEventListener('click', appData.resetData);
};

const appData = new AppData();

AppData.prototype.eventListeners();






// //функция проверки на число
// const isNum = function(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// };









 


