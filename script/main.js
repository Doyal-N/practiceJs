'use strict';

//функция
const transformText = (str) => {
  if (typeof(str)  !== 'string') {
    alert('Данные не строка')
  } else if (typeof(str) === 'string' && str.length > 30) {
    return str.trim().substring(0, 30) + "..."
  } else {
    return str.trim()
  }
}

