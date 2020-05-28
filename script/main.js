'use strict';

const out = document.getElementById('output');

const getData = (url) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('readystatechange', () => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        resolve(response);
      } else {
       reject(request.statusText);
      }
    });
    request.send();
  });
 
};

const outputPhotos = (data) => {
 const random = Math.floor(Math.random() * data.length);
 const obj = data[random];
 out.innerHTML = `<h3>${obj.title}</h3>
                  <img src='${obj.thumbnailUrl}'>`
};

let url = 'https://jsonplaceholder.typicode.com/photos';

getData(url)
  .then(outputPhotos)
  .catch(error => console.log(error));

