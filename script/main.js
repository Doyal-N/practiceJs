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
      cloneExpenses = expensesItems[0].cloneNode(true),
      additionalExpensesInput = document.querySelector('.additional_expenses-item'),
      depositInput = document.querySelector('.deposit-amount'),
      percentInput = document.querySelector('.deposit-percent'),
      goalInput = document.querySelector('.target-amount'),
      incomeItem = document.querySelectorAll('.income-items'),
      cloneIncome = incomeItem[0].cloneNode(true),
      incomeTitle = document.querySelectorAll('.income-title'),
      incomeAmount = document.querySelectorAll('.income-amount'),
      rangeSelector = document.querySelector('.period-select'),
      inputTitle = document.querySelectorAll('input[placeholder = "Наименование"]'),
      inputAmount = document.querySelectorAll('input[placeholder = "Сумма"]');
     

class AppData {
  constructor() {
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

  }

 clickStart() {
  if (incomeMonthInput.value === '') {
   alert('Поле "Месячный доход" обязательно для заполнения!')
  } else {
   return
   }
};

 start() {
          
  this.budget = +incomeMonthInput.value;
      
  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();
  this.showResult();
 };  

 btnClear () {
 let inputText = document.querySelectorAll('input[type="text"]');
  inputText.forEach(item => {
  item.disabled = true;
   });

  buttonPlus_1.style.display = 'none';
  buttonPlus_2.style.display = 'none';
  buttonCalculation.style.display = 'none';
  buttonCancel.style.display = 'block';
 };

 showResult() {
  const _this = this;
  budgetMonthValue.value = this.budgetMonth;
  dayInput.value = Math.trunc(this.budgetDay);
  expensesInput.value = this.expensesMonth;
  totalExpensesInput.value = this.addExpenses.join(', ');
  incomeInput.value = this.addIncome.join(', ');
  targetInput.value = Math.ceil(this.getTargetMonth());
  incomePeriodInput.value = this.calcSavedMoney();
  rangeSelector.addEventListener('input', () => {
  incomePeriodInput.value = _this.calcSavedMoney();
  })
      
  };

 addExpensesBlock() {
  let cloneExpensesItem = cloneExpenses.cloneNode(true);

      buttonPlus_2.before(cloneExpensesItem);
        
   expensesItems = document.querySelectorAll('.expenses-items'); 
  if (expensesItems.length === 3) {
    buttonPlus_2.style.display = 'none';
  }
};

 addIncomeBlock() {
  let cloneIncomeItem = cloneIncome.cloneNode(true);
     
 buttonPlus_1.before(cloneIncomeItem);

  incomeItem = document.querySelectorAll('.income-items');
  if (incomeItem.length === 3) {
    buttonPlus_1.style.display = 'none';
  }
};

 getExpenses() {
  const _this = this;
  expensesItems.forEach(item => {
   let itemExpenses = item.querySelector('.expenses-title').value;
   let cashExpenses = item.querySelector('.expenses-amount').value;
   if (itemExpenses !== '' && cashExpenses !== '') {
     _this.expenses[itemExpenses] = cashExpenses;
   }
  });
};

 getIncome() {
  const _this = this;
  incomeItem.forEach(item => {
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

 getAddExpenses() {
  let addExpenses = additionalExpensesInput.value.split(',');
  const _this = this;
  addExpenses.forEach(item => {
    item = item.trim();
     if (item !== '') {
       _this.addExpenses.push(item);
     }
  });
};

 getAddIncome() {
  const _this = this;
  strInput.forEach(item => {
   let itemValue = item.value.trim();
   if (itemValue !== '') {
     _this.addIncome.push(itemValue);
   }
  });
 };

 getExpensesMonth() {
  for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
  }
};

 getBudget() {
  this.budgetMonth = (this.budget + this.incomeMonth) - this.expensesMonth;
  this.budgetDay = Math.trunc(this.budgetMonth / 30);
  };

 getTargetMonth() {
  return goalInput.value / this.budget
};  

 getStatusIncome() {
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

 getInfoDeposit() {
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

 calcSavedMoney() {
  return this.budgetMonth * rangeSelector.value
 };

 periodSelect() {
  let range = document.querySelector('.period-select').value;
  let titleAmount = document.querySelector('.period-amount');

  titleAmount.textContent= range;
};

 resetData() {
  //обнуляем инпуты
let inputText = document.querySelectorAll('input[type="text"]');
 inputText.forEach(item => {
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

 eventListeners() {
  buttonCalculation.addEventListener('click', appData.clickStart);
  buttonCalculation.addEventListener('click', appData.start.bind(appData));
  buttonCalculation.addEventListener('click', appData.btnClear);
  buttonPlus_2.addEventListener('click', appData.addExpensesBlock);
  buttonPlus_1.addEventListener('click', appData.addIncomeBlock);
  rangeSelector.addEventListener('input', appData.periodSelect);
  buttonCancel.addEventListener('click', appData.resetData);
};

 validateInput() {
   //вводим только цифры (можно добавить алерт по необходимости)
  inputAmount.forEach(item => {
      item.addEventListener('input', () => {
      item.value = item.value.replace(/[^\d]+$/g, '')
    });
  });
//вводим только буквы (алерт для общения с пользователем можно по необходимости через условие)
 inputTitle.forEach(item => {
  item.addEventListener('input', () => {
  item.value = item.value.replace(/[^а-яА-Я ,]+$/g, '')
  });
})
  }; 
 };

const appData = new AppData();

appData.validateInput();
appData.eventListeners();



// //функция проверки на число
// const isNum = (n) => !isNaN(parseFloat(n)) && isFinite(n);










 


