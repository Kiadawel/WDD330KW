import Hikes from './hikes.js';
console.log('Hi I am the version you just updated.');

//on load, grab the array and insert it into the page
const myHike = new Hikes('hikes');
window.addEventListener('load', () => {
  myHike.showHikeList();
});