'use strict';

import "@babel/polyfill";
import "nodelist-foreach-polyfill";
import 'es6-promise';
import 'fetch-polyfill'
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import scroll from './modules/scroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImage from './modules/changeImage';
import calc from './modules/calc';
import validInputs from './modules/validInputs';
import sendUserdata from './modules/sendUserdata';

  //TIMER вызов по дате и времени
  countTimer('14 may 2020 20:57')
  //MENU
  toggleMenu();
  //POPUP
  togglePopUp();
  //SCROLL
  scroll();
  //TABS
  tabs();
  //SLIDER
  slider();
  //COMMAND
  changeImage();
  //CALCULATOR
  calc(100);
  //валидация полей
  validInputs();
  //send AJAX-form
  sendUserdata();