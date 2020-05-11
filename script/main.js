window.addEventListener('DOMContentLoaded', function() {
  'use strict';
  
 const text = document.querySelector('.text'),
       textTwo = document.querySelectorAll('.text_two'),
 weekDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

 let dateNow = new Date(),
      nameDay = weekDay[dateNow.getDay()],
      timeEn = dateNow.toLocaleTimeString('en'),
      timeRu = dateNow.toLocaleTimeString('ru'),
      timeNow = dateNow.getTime(),
      timeNY = new Date('31 December 2020').getTime(),
      days = Math.floor((timeNY - timeNow) / 1000 / 86400);

//вставляем полученные данные
const getDateOnPage = () => {
 if (dateNow.getHours() > 17) {
   text.textContent = 'Добрый вечер!'
 } else if ((dateNow.getHours()) > 23) {
   text.textContent = 'Добрый ночи'
 } else if ((dateNow.getHours()) > 6 && dateNow.getHours() <= 9) {
   text.textContent = 'Доброе утро'
 } else {
   text.textContent = 'Добрый день!'
 }

 textTwo[0].textContent = `Сегодня: ${nameDay}`;
 textTwo[1].textContent = `Текущее время: ${timeRu}`;
 textTwo[2].textContent = `До нового года осталось дней: ${days}`;
         }      

getDateOnPage();




























  
})
