const toggleMenu = () => {
  const menu = document.querySelector('menu'),
    section = document.querySelector('main');

  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };
//клик вне блока меню
  section.addEventListener('click', (event) => {
    let target = event.target;

    if (target.closest('.menu')) {
      handlerMenu();
    } else if (target.closest('main') && (menu.classList.contains('active-menu'))) {
      handlerMenu();
    }
  });
//клик по кнопкам и ссылкам
  menu.addEventListener('click', (event) => {
    let target = event.target;
    let link = target.closest('a');

    if (link) {
      if (link.classList.contains('close-btn')) {
        handlerMenu();
      } else if (link.closest('li')) {
        event.preventDefault();
        handlerMenu();

        let sectionClass = link.getAttribute('href').substr(1);

        if (sectionClass.includes('-')) {
          sectionClass = sectionClass.substr(0, sectionClass.indexOf('-'));
        }

        document.querySelector(`.${sectionClass}`).scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
      }
    }
  });
};

export default toggleMenu;