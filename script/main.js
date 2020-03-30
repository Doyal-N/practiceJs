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
    budgetMonth = money - (amount1 + amount2),
    period = Math.round(mission / budgetMonth),
    budgetDay = Math.trunc(budgetMonth / 30);

//вывод в консоль
console.log(typeof(money), typeof(income), typeof(deposit));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Бюджет на месяц ' + budgetMonth);
console.log('Цель будет достигнута за: ' + period + ' месяцев');
console.log('Бюджет на день: ' + budgetDay);

//ветвления
if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 || budgetDay === 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что-то пошло не так');
}









    



