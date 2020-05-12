document.addEventListener('DOMContentLoaded', function() {

  'use strict';
  
 const box = document.querySelector('.box'),
    start =  document.querySelector('.start'),
    reset = document.querySelector('.reset');

let count = 0;
let animate;

function goBox() {
 animate = requestAnimationFrame(goBox)
 count = count + 2;
if (count < 570) {
  box.style.top = `${count}px`;
  } else {
   cancelAnimationFrame(animate);
 }
   }

let anima = true;   

start.addEventListener('click', () => {
if (anima) {
  animate = requestAnimationFrame(goBox);
  anima = false;
} else {
  anima = true;
  cancelAnimationFrame(animate);
 }
  
  });

 reset.addEventListener('click', () => {
  box.style.top = '-100px';
  count = 0;
  anima = true;
  
}) 




  
})
