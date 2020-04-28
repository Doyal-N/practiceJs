'use strict';

const DomElem = function(selector, height, width, bg, fontSize) {
  this.selector = selector; 
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

};

DomElem.prototype.changeCondition = function() {
  if (this.selector.charAt(0) === '.') {
  let div = document.createElement('div');

  div.className = this.selector.slice(1);
  div.textContent = 'Это просто блок';
  div.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;

  document.querySelector('body').append(div);

 } else if (this.selector.charAt(0) === '#') {
   let text = document.createElement('p');

   text.id = this.selector.slice(1);;
   text.textContent = 'Это параграф';
   text.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;

   document.querySelector('body').append(text);
    }
};


const domElem = new DomElem('.boxic', '300px', '400px', 'red', '22px');

domElem.changeCondition();

