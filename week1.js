function loadStory(){
    let storyName = document.getElementById("name_input").value;
    let storyHTML = localStorage.getItem(storyName);
    document.getElementById("story_editor").value = storyHTML;
}

function saveStory(){
    let storyName = document.getElementById("name_input").value;
    let storyHTML = document.getElementById("story_editor").value;
    localStorage.setItem(storyName, storyHTML);
}

function displayStory(){
    let storyName = document.getElementById("name_input").value;
    let storyHTML = document.getElementById("story_editor").value;
    document.getElementById("story_display").innerHTML = `<h4>${ storyName }</h4><p>${ storyHTML }</p>`;
}

function showAllStories(){
    let storyList = document.getElementById("story_list").innerHTML;
    storyList = `<ul>`;
    for (i=0; i < (localStorage.length); i++) {
        storyList += `<li> ${ localStorage.key(i) } </li>`;
    }
    storyList += `</ul>`;
    document.getElementById("story_list").innerHTML = storyList;
}