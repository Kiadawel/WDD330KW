import Hikes from './hikes.js';
console.log('Hi I am working');

const myHike = new Hikes('hikeListId');

myHike.showHikeList();

// Example of using Classes and modules to organize the code needed to render our list of hikes. Not using MVC here.
const imgBasePath = "images/";

// methods responsible for building HTML.  Why aren't these in the class?  They don't really need to be, and by moving them outside of the exported class, they cannot be called outside the module...they become private.



function renderOneHikeFull(hike) {
  const item = document.createElement("li");

  return item; 
}