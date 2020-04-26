'use strict';

let arr = ["23", "45", "115", "67", "964", "35", "44", "12"];
//перебираем массив и вычленяем строки с цифрой 2 и 4 (нестрогое равно)
arr.forEach(function(item){
  if (item.charAt(0) == 2 || item.charAt(0) == 4) {
    console.log(item);
  }
});
//простые числа от 1 до 100
let n = 100;

nextNumber:
for ( let i = 1; i <= n; i++) {
  for ( let b = 2; b < i; b++) {
    if ( i % b == 0) continue nextNumber
  } 
  console.log('Делитель числа ' + i + ': ' + 1 + ' и ' + i);
}