const validInputs = () => {
  const nameInputs = document.querySelectorAll('input[name="user_name"]'),
  phoneInputs = document.querySelectorAll('input[name="user_phone"]'),
  message = document.querySelector('input[name="user_message"]');

  //разрешено кириллица и пробел
  for (let i = 0; i < nameInputs.length; i++) {
    nameInputs[i].addEventListener('input', () =>{
      nameInputs[i].value = nameInputs[i].value.replace(/[a-zA-Z0-9_-`\\/.\-=+*]/g, '');
    })
  };

 message.addEventListener('input', () => {
  message.value = message.value.replace(/[a-zA-Z0-9_-`\-=+*]/g, '');
 });

 //разрешено цифры и +
  for (let i = 0; i < phoneInputs.length; i++) {
    phoneInputs[i].addEventListener('input', () =>{
      phoneInputs[i].value = phoneInputs[i].value.replace(/[^\+\d]/g, '');
    })
  };
     
 };

 export default validInputs;