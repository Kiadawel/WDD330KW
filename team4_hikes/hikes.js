//create an array of hikes
const hikeList = [
    {
      name: "Bechler Falls",
      imgSrc: "bechler.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description:
        "Beautiful short hike along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    }, 
    {
      name: "Teton Canyon",
      imgSrc: "teton.jpg",
      imgAlt: "Image of Teton Canyon",
      distance: "3 miles",
      difficulty: "Easy",
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Stateline Road for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
      name: "Dunanda Falls",
      imgSrc: "dunanda.jpg",
      imgAlt: "Image of Dunanda Falls",
      distance: "7 miles",
      difficulty: "Moderate",
      description:
        "Beautiful hike through Bechler meadows river to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
  ];

// set variables to be used by the class
const imgBasePath = "images/";

export default class Hikes {
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);
    // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
    this.backButton = this.buildBackButton();
  }
  // why is this function necessary?  hikeList is not exported, and so it cannot be seen outside of this module. I added this in case I ever need the list of hikes outside of the module. This also sets me up nicely if my data were to move. I can just change this method to the new source and everything will still work if I only access the data through this getter.
  getAllHikes() {
    return hikeList;
  }
  // For the first stretch we will need to get just one hike.
  getHikeByName(hikeName) {
    return this.getAllHikes().find(hike => hike.name === hikeName);
  }
  //show a list of hikes in the parentElement
  showHikeList() {
    console.log('showing the hike list');
    const hikeList = this.getAllHikes();
    const hikeListElement = document.getElementById('hikes');
    hikeListElement.innerHTML = "";
    renderHikeList(hikeListElement, hikeList);
  }
  // show one hike with full details in the parentElement
  showOneHike(hikeName) {
    const hikeListParent = document.getElementById('hikes');
    hikeListParent.innerHTML = "";
  }
  // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
  addHikeListener() {
    // get all 'li' children of the 'ul' element
    const hikeItems = document.querySelectorAll("#hikes > li");
    const hikesArr = Array.prototype.slice.call(hikeItems);
    console.log(hikesArr);
  }
  buildBackButton() {
    const backButton = document.createElement("button");

    return backButton;
  }
}
// methods responsible for building HTML.  Why aren't these in the class?  They don't really need to be, and by moving them outside of the exported class, they cannot be called outside the module...they become private.
function renderHikeList(parent, hikes) {
  console.log('rendering the hike list');
  hikes.forEach(hike => {
    parent.appendChild(renderOneHikeLight(hike));
  });
  this.addHikeListener();  
}

function renderOneHikeLight(hike) {
  console.log('rendering one hike');
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