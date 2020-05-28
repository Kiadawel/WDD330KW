// Code to keep in Main JS
import ToDos from './ToDos.js';
const myToDoList = new ToDos('todo');
window.addEventListener('load', () => {
  myToDoList.showToDoList();
});
document.getElementById('addnew').addEventListener('click', myToDoList.addToDo());

// test function, to be removed later
function clearLS(){
    console.log('clearLS invoked');
    localStorage.clear('todo');
    console.log(localStorage.getItem('todo'));
    myToDoList.showToDoList();
}