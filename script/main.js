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
  const menu = document.querySelectorAll('#menu');
    
  //проверяет наличие свойства, добавление-удаление свойства
  const handlerMenu = () => { 
    for (let i = 0; i < menu.length; i++) {
      menu[i].classList.toggle('active-menu') 
    }; 
    };  

//навешиваем событие 
 const closeAndOpenMenu = () => {
  menu.forEach((item) => {
    item.addEventListener('click', (event) => {
     let target = event.target;
     if (target.matches('.scroll, .close-btn') || target.tagName === 'IMG' || !target.matches('active-menu')) {
       handlerMenu();
     } 
       
    });
  })
 };
 closeAndOpenMenu();

 };
toggleMenu();

//POPUP
 const togglePopUp = () => {
   const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupCloseBtn = document.querySelector('.popup-close'),
        contentPopUp = document.querySelector('.popup-content');

 let width = document.documentElement.clientWidth;
        
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

 togglePopUp();

//SCROLL
 const scroll = () => {
  const hrefs = document.querySelectorAll('.scroll'),
 scrollDown = document.querySelector('.scroll-down'),
 service = document.getElementById('service-block');

//перебор листа и скролл по ссылкам меню
 for (let i = 0; i < hrefs.length; i++) {
   hrefs[i].addEventListener('click', () => {
     event.preventDefault();

   const blockID = event.target.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth', block: 'start'})
   });
 };
//скролл по кнопке
 scrollDown.addEventListener('click', () => {
   event.preventDefault();
   service.scrollIntoView({behavior: 'smooth', block: 'start'});
 })

 };
scroll();

//TABS
 const tabs = () => {
   const tabHeader = document.querySelector('.service-header'),
     tab = tabHeader.querySelectorAll('.service-header-tab'),
     tabContent = document.querySelectorAll('.service-tab');

 //ищем нужный таб с содержимым
   const toggleTabContent = (index) => {
     for (let i = 0; i < tabContent.length; i++) {
       if (index === i) {
         tab[i].classList.add('active');
         tabContent[i].classList.remove('d-none');
       } else {
         tabContent[i].classList.add('d-none');
         tab[i].classList.remove('active');
       }
     }
   };

 //переключение по клике на таб
   tabHeader.addEventListener('click', (event) => {
     let target = event.target;
         target = target.closest('.service-header-tab');

     if (target) {
       tab.forEach((item, i) => {
         if (item === target) {
           toggleTabContent(i);
         }
       });
     }
   });


 };

 tabs();

 //SLIDER
const slider = () => {
  const  slider = document.querySelector('.portfolio-content'),
         dotsBox = document.querySelector('.portfolio-dots');

   let slide = document.querySelectorAll('.portfolio-item'),
        dot = document.querySelectorAll('.dot'),
        currentSlide = 0,
        interval;

const createDot = () => {
  let li = document.createElement('li');
  li.classList.add('dot');
  dotsBox.append(li);
  dot.forEach(() => {
    dot[0].classList.add('dot-active');
  })
};

const addDot = () => {
 slide.forEach(() => {   
  slide = document.querySelectorAll('.portfolio-item'),
  dot = document.querySelectorAll('.dot');
    if (slide.length !== dot.length) {
      createDot();
    }
  });
};

addDot();
      
const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

const autoPlaySlide = () => {
   
    prevSlide(slide, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');

    currentSlide++;
        
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    nextSlide(slide, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');

  };
    
const startSlide = (time = 3000) => {
  interval = setInterval(autoPlaySlide, time);
  };
  
const stopSlide = () => {
   clearInterval(interval);
  };

slider.addEventListener('click', (event) => {
    event.preventDefault();
    let target;
    target = event.target;

    if(!target.matches('.portfolio-btn, .dot')) {
      return;
    } 

    prevSlide(slide, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');
    
    if (target.matches('#arrow-right')) {
      currentSlide++;
    } else if (target.matches('#arrow-left')) {
      currentSlide--;
     } else if (target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
        
      });
    }
    
    if(currentSlide >= slide.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }

    slide = document.querySelectorAll('.portfolio-item'),
    dot = document.querySelectorAll('.dot');

    nextSlide(slide, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
  });

slider.addEventListener('mouseover', (event) => {
    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
      stopSlide();
    }
  });

slider.addEventListener('mouseout', (event) => {
    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
      startSlide();
    }
  });  
  
  // startSlide();

  };
 
 slider();

 //COMMAND
const changeImage = () => {
  const images = document.querySelectorAll('.command__photo');
  images.forEach((img) => {
    const way = img.getAttribute('src');
    const dataWay = img.dataset.img;

    img.addEventListener('mouseenter', () => {img.src = dataWay})
    img.addEventListener('mouseleave', () => {img.src = way})
  });
};

changeImage();

 //CALCULATOR
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

    calcTotal.textContent = total;

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
};

calc(100);

//send AJAX-form
const sendForm = () => {
  const errorMsg = 'Что-то пошло не так...',
  loadMsg = 'Загрузка...',
  successMsg = 'Спасибо! Мы скоро свяжемся с Вами!',
  form = document.getElementById('form1'),
  statusMsg = document.createElement('div');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.appendChild(statusMsg);

    const request = new XMLHttpRequest();
    request.open('POST', './server.php');
    request.setRequestHeader('Content-Type', 'multipart/form-data');
    const formData = new FormData(form);
    request.send(formData);

  request.addEventListener('readystatechange', () => {
    statusMsg.textContent = loadMsg;

    if (request.readyState !== 4) {
      return;
    }

    if (request.status === 200) {
      statusMsg.textContent = successMsg;
    } else {
      statusMsg.textContent = errorMsg;
    }
  });
 });

};

sendForm();










  
});
