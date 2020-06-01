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

 export default toggleMenu;