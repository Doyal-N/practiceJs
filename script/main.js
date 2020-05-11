window.addEventListener('DOMContentLoaded', function() {
  'use strict';
  
  //Timer
  function countTimer(deadline) {
   let timerHours = document.querySelector('#timer-hours'),
       timerMinutes = document.querySelector('#timer-minutes'),
       timerSeconds = document.querySelector('#timer-seconds');
  //получаем остаток времени вычисляя разницу
   function getTimeRemaining() {   
   let dateStop = new Date(deadline).getTime(),
       dateNow = new Date().getTime(),
       timeRemaining = (dateStop - dateNow) / 1000,
       seconds = Math.floor(timeRemaining % 60),
       minutes = Math.floor((timeRemaining / 60) % 60),
       hours = Math.floor(timeRemaining / 3600);
       return {timeRemaining, hours, minutes, seconds};
      }; 
  //отображаем на экране по заданному стандарту используя условия
    function updateClock() {
      let timer = getTimeRemaining();

      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
     
      if (timer.timeRemaining < 0) {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
     }

      if (timer.seconds >= 0 && timer.seconds < 10) {
        timerSeconds.textContent = '0' + timer.seconds
      }
     
      if(timer.minutes >= 0 && timer.minutes < 10) {
        timerMinutes.textContent = '0' + timer.minutes
      }
      
      if(timer.hours >= 0 && timer.hours < 10) {
        timerHours.textContent = '0' + timer.hours
      }

    };  

     updateClock();
    
    }

  setInterval(countTimer, 1000, '11 May 2020 19:00');



























  
})
