//show and hide portfolio notes
function showNotes() {
    let notesDisplay = document.getElementById('notes');
    let notesHider = document.getElementById('hider');
    
    if (notesDisplay.className == 'hideme') {
        notesDisplay.className = 'showme';
        notesHider.innerHTML = 'HIDE';
    }
    else {
        notesDisplay.className = 'hideme';
        notesHider.innerHTML = 'SHOW &#62;';
    }
}