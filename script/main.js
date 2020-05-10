window.addEventListener('DOMContentLoaded', function(){
  'use strict';
  
  //Timer
  function countTimer(deadline) {
   let hours = document.querySelector('#timer-hours'),
       minutes = document.querySelector('#timer-minutes'),
       seconds = document.querySelector('#timer-seconds'),
       dateStop = new Date(deadline).getTime(),
       dateNow = new Date().getTime(),
       timeRemaining = dateStop - dateNow;

      console.log(timeRemaining);

  }

  countTimer('01 july 2020'); 



























  
})
