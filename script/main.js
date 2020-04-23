'use strict';

let arr = ["23", "45", "115", "67", "964", "35", "44", "12"];
//перебираем массив и вычленяем строки с цифрой 2 и 4 (нестрогое равно)
arr.forEach(function(item){
  if (item.charAt(0) == 2 || item.charAt(0) == 4) {
    console.log(item);
  }
});


let numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

numbers.forEach(function(item){
  console.log(item + ' - делители: ' + 1 + ' и ' + item);
})