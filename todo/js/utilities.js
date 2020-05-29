 /*********************
* Utility Functions  /
**********************/

export function qs(selector){
    console.log(`QS initialized with ${selector}`);
    const item = document.getElementById(selector);
    return (item ? item : null);
}

export function onTouch(elementSelector, callback){
    console.log(`onTouch initialized`);
    const lstnItem = qs(elementSelector.id);
    
    console.log(`listenerItem is ${lstnItem}`);
    lstnItem.addEventListener('touchend', function(event) {
        event.preventDefault();
        event.currentTarget.click();
    }, false);
    lstnItem.addEventListener('click', callback, false);
}