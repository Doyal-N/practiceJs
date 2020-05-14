document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
//TIMER
 const countTimer = (deadline) => {
   let timerHours = document.querySelector('#timer-hours'),
       timerMinutes = document.querySelector('#timer-minutes'),
       timerSeconds = document.querySelector('#timer-seconds'),
       interval;
  
//получаем остаток времени вычисляя разницу
 const getTimeRemaining = () => { 
   let dateStop = new Date(deadline).getTime(),
       dateNow = new Date().getTime(),
       timeRemaining = (dateStop - dateNow) / 1000,
       seconds = Math.floor(timeRemaining % 60),
       minutes = Math.floor((timeRemaining / 60) % 60),
       hours = Math.floor(timeRemaining / 3600),
       days = Math.floor(timeRemaining / 86400);
       return {timeRemaining, days, hours, minutes, seconds};
       
      }; 
     
//отображаем на экране по заданному стандарту, используя условия
 const updateClock = () => {
      let timer = getTimeRemaining();

      timerHours.textContent = ('0' + timer.hours).slice(-2);
      timerMinutes.textContent = ('0' + timer.minutes).slice(-2);
      timerSeconds.textContent = ('0' + timer.seconds).slice(-2);

      if (Math.floor(timer.timeRemaining) <= 0) {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      clearInterval(interval);
            
     }      
     
   };  
  updateClock();
  interval = setInterval(updateClock, 1000);
   }
  
 countTimer('14 may 2020 20:57')

//MENU
 const toggleMenu = () => {
  const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');

  //проверяет наличие свойства, добавление-удаление свойства
  const handlerMenu = () => { menu.classList.toggle('active-menu') };     

  //закрытие-открытие по кнопкам
  btnMenu.addEventListener('click', handlerMenu); 
  closeBtn.addEventListener('click', handlerMenu);

  //закрытие-переход по пунктам меню (цикл либо перебор foreach)
  for(let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', handlerMenu);
  }
};

toggleMenu();

//POPUP
 const togglePopUp = () => {
   const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupCloseBtn = document.querySelector('.popup-close'),
        contentPopUp = document.querySelector('.popup-content'),
        width = screen.width;
        
  let count = 120;
 //анимация popup справа
 const animatePopUp = () => {
 let animate = requestAnimationFrame(animatePopUp);
   count = count - 5;
   if (count > 40) {
     popup.style.display = 'block'
     contentPopUp.style.left = `${count}%`;
   } else {
     cancelAnimationFrame(animate);
   }
 };

  //исходные настройки окна
  const resetAnimatePopUp = () => {
    popup.style.display = 'none';
    contentPopUp.style.left = '120%';
    togglePopUp();
  }; 

  //открытие окна без анимации
  const nonAnimateModal = () => {
    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
       popup.style.display = 'block';
      });
    });
   };

    //перебор и анимация окна
   popupBtn.forEach((elem) => {
    if (width > 768) {
      elem.addEventListener('click', animatePopUp);
     } else {
       elem.addEventListener('click', nonAnimateModal);
     }
    
   });

   //закрытие модального окна
   popupCloseBtn.addEventListener('click', () => {
     if (width > 768) {
       resetAnimatePopUp();
     } else {
      popup.style.display = 'none';
     } 
   });

 };

 togglePopUp();






















  
});
