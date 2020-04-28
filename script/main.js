'use strict';

const DomElem = function() {
    this.selector = '#sf';
    this.height = 0; 
    this.width = 0;
    this.bg = '';
    this.fontSize = 0;

};

DomElem.prototype.changeCondition = function() {
 if (this.selector[0] === '.') {
  let div = document.createElement('div');
  div.className = 'box';
  div.textContent = 'Это просто блок';
  div.style.cssText=`background-color: green;
  height: 200px;
  width: 300px;
  font-size: 22px;`; 
  document.write(div);
 } else if (this.selector[0] === '#') {
   let text = document.createElement('p');
   text.id = 'art';
   text.textContent = 'Это параграф';
   text.style.cssText= `background-color: grey;
   height: 700px;
   width: 200px;
   font-size: 22px;`
   document.write(text);
 }
};

const domElem = new DomElem();

DomElem.prototype.changeCondition();