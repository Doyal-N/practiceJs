//получаем массив из числа любым способом
let num = 266219;
    Arr= String(num).split('');
    //используем метод reduce для свертки массива
    multi = Arr.reduce((total, next) => total * next);
    //возводим в степень
    multi = multi ** 3;

//выводим первые две цифры результата
console.log(+(String(multi).substring(0, 2)));







    