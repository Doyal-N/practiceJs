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
    second = today.getSeconds();
  
let dateNow = `'Сегодня ${nameDay}, ${numberDay} ${nameMonth} ${numberYear} года, ${hour} час ${minute} минут ${second} секунды'`; 

console.log(dateNow);    





