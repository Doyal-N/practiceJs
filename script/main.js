'use strict';

//функция
const transformText = function(str) {
  if (typeof(str)  !== 'string') {
    alert('Данные не строка')
  } else if (typeof(str) === 'string') {
     console.log(str.trim());
  }
}

transformText('                   ну на конец то              ');