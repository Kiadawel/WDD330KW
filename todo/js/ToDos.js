
/************************
* Main Class and Methods / 
*************************/
const toDoList = null;

export default class ToDos {
    constructor(elementID) {
        this.parentElement = document.getElementById(elementID);
        this.LSkey = this.parentElement.id;
    }

    //grab all items in the localStorage array
    getAllItems() {
        console.log(`getAllItems invoked for ${this.LSkey}`);
        return lsHelpers.readFromLS(this.LSkey);
    }
    //grab just one to do
    getOneToDo(toDoID) {
        console.log(`getOneToDo invoked with ${toDoID}`);
        return getToDos().find(task => task.id == toDoID);
    }
    //add an item to the list
    addToDo(){
        //grab the user's input
        const taskContent = document.getElementById('new_task');
        //send to create the new item
        saveToDo(this.LSkey, taskContent);
        //refresh the list
        this.showToDoList();
    }
    //show the list in the parent function
    showToDoList(){
        console.log('showToDoList invoked');
        renderToDoList(this.parentElement, toDoList);
    }
    //show one ToDo item
    showOneToDo(toDoID){
        console.log('showOneToDo invoked');
        const oneTask = this.getOneToDo(toDoID);
        console.log(oneTask);
        renderOneToDo(this.parentElement, oneTask);
    }
    //add event listeners to each list item
    addEventListeners() {
        const listItems = Array.from(this.parentElement.children);
        listItems.forEach(item => {
            //checkboxes
            item.children[0].addEventListener('click', event => {
                this.completeToDo(event.currentTarget.id);
            })
            //task removal buttons
            item.children[2].addEventListener('click', event => {
                this.removeItem(event.currentTarget.parentElement.children[0].id);
            })
        })
        //filter tabs
        const listTabs = Array.from(document.querySelectorAll('.bottom-tab'));
        listTabs.forEach(tab => {
            tab.addEventListener('click', event => {
                for (let item in listTabs){
                    console.log(item);
                    listTabs[item].classList.remove('selected-tab');
                }
                event.currentTarget.classList.add('selected-tab');
                filterBy(event.currentTarget.id);
            })
        })
    }

    //toggle the checkbox on/off, change boolean of item to true/false
    completeToDo(itemID) {
        //pull the whole array from LocalStorage
        let allItems = this.getAllItems();
        console.log(allItems);
        //search the array for this one item and get its index
        let oneTask = allItems.findIndex(task => task.id == itemID);
        console.log(oneTask);
        //swap the boolean value (true = false, false = true)
        allItems[oneTask].completed = !allItems[oneTask].completed;
        //send the updated array to LocalStorage        
        lsHelpers.updateLS(this.LSkey, allItems);
        //style the item
        markDone(itemID);
    }
    //remove an item from the list
    removeItem(itemID) {
        console.log('removeItem invoked');
        const confirmRemove = confirm(`Remove this task?`);
        if (confirmRemove){
            let allItems = this.getAllItems();
            let oneTask = allItems.findIndex(task => task.id == itemID);
            allItems.splice(oneTask, 1);
            lsHelpers.updateLS(this.LSkey, allItems);
            this.showToDoList();
        }
    }
    filterToDos(category){
        const arrFilter = this.getAllItems().filter(todo => {
            return todo.completed == category; 
        })
        renderToDoList(this.parentElement, arrFilter);
        if(lsHelpers.readFromLS(this.LSkey) != null){
            this.addEventListeners();
        }
    }
}

function getToDos(key){
    if (toDoList == null){
        toDoList = [];
        toDoList.push(lsHelpers.readFromLS(key));
    }
    return toDoList;
}

function saveToDo(key, taskContent){
    console.log('saveToDo invoked');
    // generate an ID based on timestamp
    let taskID = Date.now();

    //create a task object using the entered data (incomplete by default)
    //(only if a value has been entered)
    if(taskContent && taskContent.value){
        console.log('field has a value');
        const newTask = {id: taskID, content: taskContent.value, completed: false};
        toDoList.push(newTask);
        lsHelpers.updateLS(key,toDoList);
        taskContent.classList.remove("error-input");
        taskContent.value = '';
    } else {
        console.log('no task has been entered');
        taskContent.classList.add("error-input");
    }
    taskContent.focus();
}

//make the list show up in HTML
function renderToDoList(parent, toDoList) {
    console.log('renderToDoList invoked');
    console.log(toDoList);
    parent.innerHTML = '';
    if(toDoList != null){
    toDoList.forEach(taskObject => {
        //console.log(taskObject);
        parent.appendChild(renderOneToDo(taskObject));
    })
    }else {
        const emptyList = document.createElement('li');
        emptyList.innerHTML = `You haven't added any items yet!`
        parent.appendChild(emptyList);
    }
    updateCount(toDoList);
}

//make one item show up in HTML
function renderOneToDo(task) {
    console.log('renderOneToDo invoked');
    const oneTask = document.createElement('li');
    task.completed ? oneTask.classList.toggle('completed') : '';
    oneTask.innerHTML = 
        `<input id="${task.id}" name="${task.content}" type="checkbox" value="none" ${task.completed ? 'checked' : ''}>
        <label for="${task.id}">${task.content}</label>
        <div class="remove">X</div>`;
    return oneTask;
}

//update the counter at the bottom
function updateCount(list){
    console.log('updateCount invoked');
    const taskCounter = document.getElementById('task-counter');
    if(list != null) {
        taskCounter.innerHTML = `${list.length} tasks found`;
    } else {
        taskCounter.innerHTML = `0 tasks found`;
    }
}

//make a completed item style itself finished
function markDone(itemID){
    let taskContainer = document.getElementById(itemID).parentElement;
    taskContainer.classList.toggle('completed');
}

//filter list by active, completed, or all
function filterBy(category){
    console.log('filterBy invoked');
    switch(category){
        case 'filter-all':
            myToDoList.showToDoList(true || false);
            break;
        case 'filter-active':
            myToDoList.filterToDos(false);
            break;
        case 'filter-completed':
            myToDoList.filterToDos(true);
    }
}


import * as lsHelpers from './ls.js';
import * as utilHelpers from './utilities.js';


