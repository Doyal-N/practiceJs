'use strict';
//новый объект Дата и массив
let date = new Date(2020, 3, 25),
    weekDay = [ 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье' ];
//функция выдает номер дня, которое выдергивает день из массива
function showWeekDay(date) {
  return weekDay[date.getDay()];
}
// перебираем массив и навещиваем свойства на отдельные дни
weekDay.forEach(function(item){
  if (item == weekDay[date.getDay()]) {
    item = item.italics().bold();
  } else if (item == weekDay[5] || item == weekDay[6]) {
    item = item.italics()
  }
  document.write(item + "<br \/>");
})

