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

  export default scroll;