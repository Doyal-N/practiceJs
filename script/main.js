'use strict';

/*/функция
const transformText = (str) => {
  if (typeof(str)  !== 'string') {
    return('Данные не строка')
  } else if (typeof(str) === 'string' && str.length > 30) {
    return str.trim().substring(0, 30) + "..."
  } else {
    return str.trim()
  }
}*/

const transformText = (str) => {
  typeof(str) === 'string' && str.length > 30 ? alert(str.trim().substring(0, 30) + "...") : alert(str.trim());
  typeof str !== 'string' ? alert('Данные не строка') : alert(str.trim())

}

transformText("Орган ЗАГС, где ранее граждане оформляли брак, может развести их при соблюдении условий.");


