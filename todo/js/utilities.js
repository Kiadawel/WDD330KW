 /*********************
* Utility Functions  /
**********************/
function saveToDo(key, taskContent){
    console.log('saveToDo invoked');
    // generate an ID based on timestamp
    let taskID = Date.now();

    //create an object using the entered data (incomplete by default)
    //(only if a value has been entered)
    if(taskContent && taskContent.value){
        console.log('field has a value');
        const newTask = {id: taskID, content: taskContent.value, completed: false};
        writeToLS(key, newTask);
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

//make a completed item style itself finished
function markDone(itemID){
    let taskContainer = document.getElementById(itemID).parentElement;
    taskContainer.classList.toggle('completed');
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