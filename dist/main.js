!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=()=>{const e=document.querySelectorAll("#menu");e.forEach(t=>{t.addEventListener("click",t=>{let o=t.target;!o.matches(".scroll, .close-btn")&&"IMG"!==o.tagName&&o.matches("active-menu")||(()=>{for(let t=0;t<e.length;t++)e[t].classList.toggle("active-menu")})()})})};const n=()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-close"),r=document.querySelector(".popup-content");let l=document.documentElement.clientWidth,c=120;const a=()=>{let t=requestAnimationFrame(a);c-=5,c>40?(e.style.display="block",r.style.left=c+"%"):cancelAnimationFrame(t)},s=()=>{e.style.display="none",r.style.left="120%",n()},u=()=>{t.forEach(t=>{t.addEventListener("click",()=>{e.style.display="block"})})};t.forEach(e=>{l>768?e.addEventListener("click",a):e.addEventListener("click",u)}),o.addEventListener("click",()=>{l>768?s():e.style.display="none"}),e.addEventListener("click",e=>{let t=e.target;t=t.closest(".popup-content"),t||s()})};var l=n;var c=()=>{const e=document.querySelectorAll(".scroll"),t=document.querySelector(".scroll-down"),o=document.getElementById("service-block");for(let t=0;t<e.length;t++)e[t].addEventListener("click",()=>{event.preventDefault();const e=event.target.getAttribute("href").substr(1);document.getElementById(e).scrollIntoView({behavior:"smooth",block:"start"})});t.addEventListener("click",()=>{event.preventDefault(),o.scrollIntoView({behavior:"smooth",block:"start"})})};var a=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let r=e.target;r=r.closest(".service-header-tab"),r&&t.forEach((e,n)=>{e===r&&(e=>{for(let r=0;r<o.length;r++)e===r?(t[r].classList.add("active"),o[r].classList.remove("d-none")):(o[r].classList.add("d-none"),t[r].classList.remove("active"))})(n)})})};var s=()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelector(".portfolio-dots");let o,r=document.querySelectorAll(".portfolio-item"),n=document.querySelectorAll(".dot"),l=0;r.forEach(()=>{r=document.querySelectorAll(".portfolio-item"),n=document.querySelectorAll(".dot"),r.length!==n.length&&(()=>{let e=document.createElement("li");e.classList.add("dot"),t.append(e),n.forEach(()=>{n[0].classList.add("dot-active")})})()});const c=(e,t,o)=>{e[t].classList.remove(o)},a=(e,t,o)=>{e[t].classList.add(o)},s=()=>{c(r,l,"portfolio-item-active"),c(n,l,"dot-active"),l++,l>=r.length&&(l=0),a(r,l,"portfolio-item-active"),a(n,l,"dot-active")};e.addEventListener("click",e=>{let t;e.preventDefault(),t=e.target,t.matches(".portfolio-btn, .dot")&&(c(r,l,"portfolio-item-active"),c(n,l,"dot-active"),t.matches("#arrow-right")?l++:t.matches("#arrow-left")?l--:t.matches(".dot")&&n.forEach((e,o)=>{e===t&&(l=o)}),l>=r.length&&(l=0),l<0&&(l=r.length-1),r=document.querySelectorAll(".portfolio-item"),n=document.querySelectorAll(".dot"),a(r,l,"portfolio-item-active"),a(n,l,"dot-active"))}),e.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(o)}),e.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&((e=3e3)=>{o=setInterval(s,e)})()})};var u=()=>{document.querySelectorAll(".command__photo").forEach(e=>{const t=e.getAttribute("src"),o=e.dataset.img;e.addEventListener("mouseenter",()=>{e.src=o}),e.addEventListener("mouseleave",()=>{e.src=t})})};var i=(e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),n=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),c=document.getElementById("total"),a=()=>{let t=0,a=1,s=1;const u=o.options[o.selectedIndex].value,i=r.value;n.value>1&&(a+=(n.value-1)/10),l.value&&l.value<=5?s*=2:l.value&&l.value<10&&(s*=1.5),u&&i&&(t=e*u*i*a*s),function({timing:e,draw:t,duration:o}){let r=performance.now();requestAnimationFrame((function n(l){let c=(l-r)/o;c>1&&(c=1);let a=e(c);t(a),c<1&&requestAnimationFrame(n)}))}({duration:2e3,timing:e=>e,draw(e){c.textContent=Math.floor(e*t)}})};t.addEventListener("change",e=>{let t=e.target;t!==o&&t!==r&&t!==n&&t!==l||a()});document.querySelectorAll(".calc-item").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^\d]+$/g,"")})})};var d=()=>{const e=document.querySelectorAll('input[name="user_name"], input[name="user_message"]'),t=document.querySelectorAll('input[name="user_phone"]');for(let t=0;t<e.length;t++)e[t].addEventListener("input",()=>{e[t].value=e[t].value.replace(/[a-zA-Z0-9_-`\\/.\-=+*]/g,"")});for(let e=0;e<t.length;e++)t[e].addEventListener("input",()=>{t[e].value=t[e].value.replace(/[^\+\d]/g,"")})};var m=()=>{const e=document.querySelectorAll("form"),t=document.createElement("div");e.forEach(e=>{e.addEventListener("submit",r=>{r.preventDefault(),e.append(t),t.style.color="red",t.textContent="Загрузка...";let n=new FormData(e),l={};for(let e of n.entries())l[e[0]]=e[1];o(l).then(o=>{if(200!==o.status)throw new Error("Network status is not 200.");t.textContent="Спасибо! Мы скоро свяжемся с Вами!";let r=e.elements;for(let e of r)"button"!==e.tagName.toLowerCase()&&(e.value="")}).catch(e=>{t.textContent="Что-то пошло не так...",console.error(e)})})});const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"aplication/json"},body:JSON.stringify(e)})};(e=>{let t,o=document.querySelector("#timer-hours"),r=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");const l=()=>{let l=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600);return{timeRemaining:t,days:Math.floor(t/86400),hours:n,minutes:r,seconds:o}})();o.textContent=("0"+l.hours).slice(-2),r.textContent=("0"+l.minutes).slice(-2),n.textContent=("0"+l.seconds).slice(-2),Math.floor(l.timeRemaining)<=0&&(o.textContent="00",r.textContent="00",n.textContent="00",clearInterval(t))};l(),t=setInterval(l,1e3)})("14 may 2020 20:57"),r(),l(),c(),a(),s(),u(),i(100),d(),m()}]);