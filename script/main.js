'use strict';

let date = new Date(2020, 3, 25),
    weekDay = [ 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье' ];

function showWeekDay(date) {
  return weekDay[date.getDay()];
}

const today = showWeekDay(date);


weekDay.forEach(function(item){
  if (item == weekDay[date.getDay()]) {
    item = item.italics().bold();
  } else if (item == weekDay[5] || item == weekDay[6]) {
    item = item.italics()
  }
  document.write(item + "<br \/>");
})

