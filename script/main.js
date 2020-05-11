'use strict';
//новый объект Дата и массивы
const today = new Date(),
    weekDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

//получим данные
let nameDay = weekDay[today.getDay()],
    numberYear = today.getFullYear(),
    numberDay = today.getDate(),
    nameMonth = months[today.getMonth()],
    hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds(),
    numMonth = today.getMonth();
 //переменные в зависимости от склонения 
let dateNow1 = `'Сегодня ${nameDay}, ${numberDay} ${nameMonth} ${numberYear} года, ${hour} час ${minute} минут ${second} секунды'`,
    dateNow2 = `'Сегодня ${nameDay}, ${numberDay} ${nameMonth} ${numberYear} года, ${hour} часов ${minute} минут ${second} секунды'`, 
    dateNow3 = `'Сегодня ${nameDay}, ${numberDay} ${nameMonth} ${numberYear} года, ${hour} часа ${minute} минут ${second} секунды'`;
//функция вывода формата даты и времени на экран
 let change = function() {
  if ( hour === 1 || hour === 21) {
    document.querySelector('body').append(dateNow1);
  } else if ( hour === 2 || hour === 3 || hour === 4 || hour === 22 || hour === 23){
    document.querySelector('body').append(dateNow3);
  } else {document.querySelector('body').append(dateNow2)}
};

change();
    
let checkDateTime = function() { 
 let timeNode = document.getElementById('time-node'),
     date = today.toLocaleDateString(),
     time = today.toLocaleTimeString();
  

timeNode.textContent = `'${date} - ${time}'`     

  };
 
checkDateTime();




