'use strict';

const out = document.getElementById('output');

const getData = (url, outputData) => {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) {
      return;
    }
    if (request.status === 200) {
      const response = JSON.parse(request.responseText);
      outputData(response);
    } else {
     console.error(request.statusText);
    }
  });
  request.send();
};

const outputPhotos = (data) => {
 const random = Math.floor(Math.random() * data.length);
 const obj = data[random];
 out.innerHTML = `<h2>${obj.title}</h2>
                  <img src='${obj.url}'>`
};

getData('https://jsonplaceholder.typicode.com/photos', outputPhotos);
