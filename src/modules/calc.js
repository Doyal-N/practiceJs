const calc = (price = 100) => {

  const calcBlock = document.querySelector('.calc-block'),
   calcType = document.querySelector('.calc-type'),
   calcSquare = document.querySelector('.calc-square'),
   calcCount = document.querySelector('.calc-count'),
   calcDay = document.querySelector('.calc-day'),
   calcTotal = document.getElementById('total');
 
   const countSum = () => {
 
     let total = 0,
     countValue = 1,
     dayValue = 1;
     const typeValue = calcType.options[calcType.selectedIndex].value,
      square = calcSquare.value;
 
     if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
      }
      
     if (calcDay.value && calcDay.value <= 5) {
       dayValue *= 2
     } else if (calcDay.value && calcDay.value < 10) {
       dayValue *= 1.5
     }
 
     if (typeValue && square) {
       total = price * typeValue * square * countValue * dayValue;
     } 
    //отрисовка ИТОГО
     animate({duration: 2000, timing(timeFraction){
       return timeFraction;
     },
     draw(progress) {
       calcTotal.textContent = Math.floor(progress * total);
     },
   });
 
   };
  
   calcBlock.addEventListener('change', (event) => {
     let target = event.target;
 
     if (target === calcType || target === calcSquare || target === calcCount || target === calcDay) {
       countSum();
     }
   });
 
 const inputNumbers = () => {
   const inputs = document.querySelectorAll('.calc-item');
    inputs.forEach((item) => {
      item.addEventListener('input', () => {
       const num = /[^\d]+$/g;
       item.value = item.value.replace(num, '');
      });
    });
  }
   inputNumbers();
 
 function animate({timing, draw, duration}) {
 
     let start = performance.now();
   
     requestAnimationFrame(function animate(time) {
       // timeFraction изменяется от 0 до 1
       let timeFraction = (time - start) / duration;
       if (timeFraction > 1) timeFraction = 1;
   
       // вычисление текущего состояния анимации
       let progress = timing(timeFraction);
   
       draw(progress); // отрисовать её
   
       if (timeFraction < 1) {
         requestAnimationFrame(animate);
       }  
     });
   }
 };

 export default calc;