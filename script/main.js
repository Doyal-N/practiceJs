'use strict';

//вводим переменные (необязательный шаг)
let ru_days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
en_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//многомерный массив
let lang = {
    'ru': ru_days,
    'en': en_days
}
console.log(lang['ru']);

//условия через if
if (lang == 'ru') {
    console.log(ru_days);
} else if (lang == 'en') {
    console.log(en_days);
}

//условия через switch
switch (lang) {
    case 'ru':
        console.log(ru_days);
        break;
    case 'en':
        console.log(en_days);
        break;
    default:
        console.log('Выберите язык');
}

//тернарные операторы
let namePerson = 'Артем';
namePerson === ('Артем') ? console.log('Директор') :
namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');