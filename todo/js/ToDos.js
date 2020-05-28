
/************************
* Main Class and Methods / 
*************************/
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
    getToDo(toDoID) {
        console.log(`getToDo invoked with ${toDoID}`);
        return this.getAllItems().find(task => task.id == toDoID);
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
        utilHelpers.renderToDoList(this.parentElement, this.getAllItems());
        if(lsHelpers.readFromLS(this.LSkey) != null){
            this.addEventListeners();
        }
    }
    //show one ToDo item
    showOneToDo(toDoID){
        console.log('showOneToDo invoked');
        const oneTask = this.getToDo(toDoID);
        console.log(oneTask);
        utilHelpers.renderOneToDo(this.parentElement, oneTask);
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
                utilHelpers.filterBy(event.currentTarget.id);
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
        utilHelpers.markDone(itemID);
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
        utilHelpers.renderToDoList(this.parentElement, arrFilter);
        if(lsHelpers.readFromLS(this.LSkey) != null){
            this.addEventListeners();
        }
    }
}

function saveToDo(key, taskContent){
    console.log('saveToDo invoked');
    // generate an ID based on timestamp
    let taskID = Date.now();

    //create an object using the entered data (incomplete by default)
    //(only if a value has been entered)
    if(taskContent && taskContent.value){
        console.log('field has a value');
        const newTask = {id: taskID, content: taskContent.value, completed: false};
        lsHelpers.writeToLS(key, newTask);
        taskContent.classList.remove("error-input");
        taskContent.value = '';
    } else {
        console.log('no task has been entered');
        taskContent.classList.add("error-input");
    }
    taskContent.focus();
}

import * as lsHelpers from './ls.js';
import * as utilHelpers from './utilities.js';


