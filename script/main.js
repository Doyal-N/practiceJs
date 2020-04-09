'use strict';

const guessNumber = function() {
    let number = 34;
    let question = prompt('Угадай число от 1 до 100!');
    if (question > number) {
      prompt('Загаданное число меньше. Попробуй еще!');
    } else if (question < number) {
     prompt('Загаданное число больше, попробуй еще!');
    } else if (question === number) {
        alert('Все ок');
    }
 };

guessNumber();