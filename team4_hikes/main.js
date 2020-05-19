import Hikes from './hikes.js';
console.log('Hi I am working');

//on load, grab the array and insert it into the page
const myHike = new Hikes('hikes');
window.addEventListener('load', () => {
  myHike.showHikeList();
});