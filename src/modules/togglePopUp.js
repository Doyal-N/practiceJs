const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
       popupBtn = document.querySelectorAll('.popup-btn'),
       popupCloseBtn = document.querySelector('.popup-close'),
       contentPopUp = document.querySelector('.popup-content');
       
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
    if (document.documentElement.clientWidth > 768) {
     elem.addEventListener('click', animatePopUp);
    } else {
      elem.addEventListener('click', nonAnimateModal);
    }
 });

  //закрытие модального окна
  popupCloseBtn.addEventListener('click', () => {   
  if (document.documentElement.clientWidth > 768) {
      resetAnimatePopUp();
    }else {
     popup.style.display = 'none';
    } 
  });

  //закрытие окна по клику вне него
  popup.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.popup-content');
    if (!target) {
      resetAnimatePopUp();
    }
  })

 };

 export default togglePopUp;