'use strict';

//вводим переменные (необязательный шаг)
let lang,
ru_days = ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
en_days = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];

//условия через if
if (lang == 'ru') {
    console.log(ru_days);
} else if (lang == 'en') {
    console.log(en_days);
}

//условия через switch
