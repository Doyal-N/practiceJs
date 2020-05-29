document.addEventListener('DOMContentLoaded', () => {
    'use strict';

const select = document.getElementById('cars'),
      output = document.getElementById('output');

const showCar = (data) => {
    data.cars.forEach(item => {
     if (item.brand === select.value) {
     const {brand, model, price} = item;
        output.innerHTML = `Тачка: ${brand} ${model} <br>
                            Цена: ${price}$`;
     }else if(select.value === 'no'){
      output.innerHTML = `Выберите тачку!`;
      }
        });
    };

 select.addEventListener('change', () => {
     return new Promise((resolve, reject) => {
     const request = new XMLHttpRequest();

     request.open('GET', './cars.json');
     request.setRequestHeader('Content-type', 'application/json');
     request.send();

     request.addEventListener('readystatechange', () => {
                
     if (request.readyState !== 4){
       return;
        }

     if(request.status === 200){
      let data = JSON.parse(request.responseText);
      resolve(data);
      }else {
      reject('Что-то пошло не так');
      }
      });

      })
     .then(showCar)
     .catch(error => {
      output.innerHTML = error;
        })
        
    });

});