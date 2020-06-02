const sendUserdata = () => {
  const forms = document.querySelectorAll('form'),
  errorMsg = 'Что-то пошло не так...',
  loadMsg = 'Загрузка...',
  successMsg = 'Спасибо! Мы скоро свяжемся с Вами!',
  statusMsg = document.createElement('div');
  
  forms.forEach((item) => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();
      item.append(statusMsg);
      statusMsg.style.color = 'blue';
      statusMsg.textContent = loadMsg;
      let formData = new FormData(item);
      let body = {};
      for(let val of formData.entries()) {
        body[val[0]] = val[1];
      } 

    postData(body)
     .then(response => {
       if(response.status !== 200) {
         throw new Error('Network status is not 200.')
       }

      statusMsg.textContent = successMsg;
      let inputsForm = item.elements;
      for (let elem of inputsForm) {
        if (elem.tagName.toLowerCase() !== 'button') {
         elem.value = '';
        }}})
     .catch(error => {
       statusMsg.textContent = errorMsg;
       console.error(error);
     });
   })
    });

const postData = (data) => {
  return fetch('./server.php', {
   method: 'POST',
   headers: {
       'Content-Type': 'aplication/json'
   },
   body: JSON.stringify(data),
  });

 }; 
};

export default sendUserdata;