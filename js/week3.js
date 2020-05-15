//Chapter 5 Quiz Ninja
const quiz = [    
  { name: "Superman",realName: "Clark Kent" },    
  { name: "Wonder Woman",realName: "Diana Prince" },    
  { name: "Batman",realName: "Bruce Wayne" },
 ];

const view = {
  score: document.querySelector('#score strong'),
  question: document.getElementById('question'),
  result: document.getElementById('result'),
  info: document.getElementById('info'),
  start: document.getElementById('start'),
  render(target,content,attributes) {
    for(const key in attributes) {
      target.setAttribute(key,attributes[key]);
    }
    target.innerHTML = content;
  },
  show(element){
    element.style.display = 'block';
  },
  hide(element){
    element.style.display = 'none';
  }
}

const game = {
  start(quiz){
    view.hide(view.start);
    this.questions = [...quiz];
    this.score = 0;
    // main game loop
    for (const question of this.questions){
      this.question = question;
      this.ask();
    }
    //end of main game loop
    this.gameOver();
  },
  ask(){
    const question = `What is ${this.question.name}'s real name?`;
    view.render(view.question, question);
    const response = prompt(question);
    this.check(response);
  },
  check(response){
    const answer = this.question.realName;
    if(response === answer || response === answer.toLowerCase()){
      view.render(view.result,'Correct!',{'class':'correct'});
      alert('Correct!');
      this.score++;
      view.render(view.score,this.score);
    } else {
      view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
      alert(`Wrong! The correct answer was ${answer}`);
    }
  },
  gameOver(){
    view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}!`);
    view.show(view.start);
  }
}

view.start.addEventListener('click', () => game.start(quiz), false);

// EJS BUILD A TABLE
const mountains = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

function buildTable(){
  const mtDiv = document.getElementById('mountains');
    mtDiv.innerHTML = '';
  const mtTable = document.createElement('table');
  const headRow = document.createElement('tr');

  //loop through keys and create a table heading for each one
  for(let colName in mountains[0]){
    let colHead = document.createElement('th');
    colHead.textContent = colName;
    headRow.appendChild(colHead);   
  }
  //attach newly-filled row to the table
  mtTable.appendChild(headRow); 

  //loop through each mountain and create a new row for each mountain
  for(const mtn in mountains){
    let newRow = document.createElement('tr');
    //loop through each mountain and create a new table cell for each piece of data
    console.log(mountains[mtn]);
    for(let item in mountains[mtn]){
      let newCell = document.createElement('td');
      newCell.textContent = mountains[mtn][item];
      
      if(typeof(mountains[mtn][item]) == 'number'){
        newCell.style.textAlign = 'right';
      }
      newRow.appendChild(newCell);
    }
    mtTable.appendChild(newRow);
  }
  mtDiv.appendChild(mtTable);
}
