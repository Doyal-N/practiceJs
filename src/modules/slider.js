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

  startSlide();
  dot = document.querySelectorAll('.dot');
 
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
  
  
  };

  export default slider;