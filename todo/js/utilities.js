 /*********************
* Utility Functions  /
**********************/

function qs(selector){
    const item = document.querySelector(selector);
    return (item ? item : null);
}

function onTouch(elementSelector, callback){
    const lstnItem = qs(elementSelector);
    lstnItem.addEventListener('click', function(event) {
        event.preventDefault();
        event.currentTarget.click();
    }, false);
    lstnItem.addEventListener('click', callback,);
}