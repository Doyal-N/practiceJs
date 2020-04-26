'use strict';

let date = new Date(2020, 3, 25),
    weekDay = [ 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье' ];

function showWeekDay(date) {
  return weekDay[date.getDay()].bold();
}

const today = showWeekDay(date);
document.write(today + "<br \/>");

weekDay.forEach(function(item){
  if (item !== weekDay[date.getDay()]) {
    item = item.italics();
    document.write(item + "<br \/>");
  }
  
})

