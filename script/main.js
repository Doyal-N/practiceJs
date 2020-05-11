window.addEventListener('DOMContentLoaded', function() {
  'use strict';
  
  //Timer
function countTimer(deadline) {
   let timerHours = document.querySelector('#timer-hours'),
       timerMinutes = document.querySelector('#timer-minutes'),
       timerSeconds = document.querySelector('#timer-seconds'),
       interval = setInterval(updateClock, 1000);

   //получаем остаток времени вычисляя разницу
  function getTimeRemaining() {   
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
  function updateClock() {
      let timer = getTimeRemaining();

      timerHours.textContent = ('0' + timer.hours).slice(-2);
      timerMinutes.textContent = ('0' + timer.minutes).slice(-2);
      timerSeconds.textContent = ('0' + timer.seconds).slice(-2);
     
      if (timer.timeRemaining <= 0) {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';

        clearInterval(interval);
     }
    };    
   }
   
 interval = setInterval(countTimer, 1000, '11 may 2020 12:59');



























  
})
