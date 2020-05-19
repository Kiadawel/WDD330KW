import Hikes from './hikes.js';

const myHike = new Hikes('hikeListId');

// Example of using Classes and modules to organize the code needed to render our list of hikes. Not using MVC here.
const imgBasePath = "images/";

// methods responsible for building HTML.  Why aren't these in the class?  They don't really need to be, and by moving them outside of the exported class, they cannot be called outside the module...they become private.
function showHikeList() {
  const hikeList = myHike.getAllHikes();
  const hikeListElement = document.getElementById('hikes');
  hikeListElement.innerHTML = "";
  renderHikeList(hikeListElement, hikeList);
}

function renderHikeList(parent, hikes) {
  for(hike in hikes){
    parent.appendChild(renderOneHikeLight(hike));
  }
}

function renderOneHikeLight(hike) {
  const item = document.createElement("li");
  item.innerHTML = ` <h2>${hike.name}</h2>
  <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
  <div>
          <div>
              <h3>Distance</h3>
              <p>${hike.distance}</p>
          </div>
          <div>
              <h3>Difficulty</h3>
              <p>${hike.difficulty}</p>
          </div>
  </div>`;
  return item;
}

function renderOneHikeFull(hike) {
  const item = document.createElement("li");

  return item; 
}