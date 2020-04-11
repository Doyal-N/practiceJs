'use strict';

//проверка на число
const isNum = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

//функция случайного числа
const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//счетчик
const getCounter = () => {
  let counter = 0;
  return function() {
    return ++counter;
  }
};

//рекурсивная функция
const guessNumber = (effort) => {
  const randomNum = getRandomNum(1, 100);
  const counter = getCounter();

  return function checkNumber() {
    const count = counter();
    const userNumber = prompt('Угадай число от 1 до 100');

    if (isNum(userNumber)) {
      let repeat = false;      
      if (count < effort) {
       const num = +userNumber;
       if(num > randomNum) {
         alert('Загаданное число меньше');
         return checkNumber();
       }
       if(num < randomNum) {
         alert('Загаданное число больше');
         return checkNumber();
       } 
       repeat = confirm('Поздравляю. Вы угадали! Хотите сыграть еще?');
     
     } else {
       repeat = confirm('Попытки закончились. Сыграть еще?');
     }

      if (repeat) guessNumber(effort);

    } else {
      alert('Введите число');
      checkNumber();
    }
  }

};

const game = guessNumber(10);

game();