let money = 50000;
let income = 'анимация';
let addExpenses = ('programms, food, taxi, gas'); 
let deposit = true;
let mission = 108000;
let period = 7;

console.log(typeof(money), typeof(income), typeof(deposit));

console.log(addExpenses.length);

console.log( 'Период равен ' + period + ' месяцев');

console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = (money / 30);
console.log(budgetDay);