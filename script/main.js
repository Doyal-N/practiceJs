'use strict';
//создаем Класс и на основе него объект
class First {
 constructor() {}

 hello() {
  console.log('Привет, я метод родителя!');   
 }

  };
const first = new First();
//расширяем класс на основе предыдущего
class Second extends First {
 constructor() {
  super();
 }

 hello() {
   first.hello();
   console.log('А я наследуемый метод!');
 }
 };

 const second = new Second();

 second.hello();