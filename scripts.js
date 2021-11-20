let note;
const notesContainer = document.querySelector('.notes-container');
const navigationMenu = document.querySelector('.navigation-menu');
const contextMenu = document.querySelector('.context-menu-panel');
const addNote = document.querySelector('.add-note');

let isGrabbed = false;
let offset;
let highestZIndex = 10;

addNote.addEventListener('click', () => {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.id = Math.random();
    newNote.style.top = navigationMenu.offsetHeight + 15 + 'px';
    newNote.style.left = '15px';
    newNote.style.backgroundColor = '#' + Math.floor(1 + Math.random()*16777215).toString(16);
    newNote.addEventListener('mousedown', (e) => { 
        isGrabbed = true;
        note = newNote;
        offset = [
            note.offsetLeft - e.clientX,
            note.offsetTop - e.clientY
        ];
        note.style.opacity = 0.8;
        if(note.style.zIndex >= highestZIndex){
            highestZIndex = note.style.zIndex;
        } else {
            highestZIndex++;
            note.style.zIndex = highestZIndex;
        }
    });
    notesContainer.appendChild(newNote);
});

window.addEventListener('mouseup', () =>{
    if(note && isGrabbed) {
        if(note.offsetTop < navigationMenu.offsetHeight + 15) {
            note.style.top = navigationMenu.offsetHeight + 15 + 'px';
        }
        if(note.offsetLeft < 15){
            note.style.left = '15px';
        }
        if((note.offsetTop + note.offsetHeight) > notesContainer.offsetHeight - 15) {
            note.style.top = (notesContainer.offsetHeight - note.offsetHeight) - 15 + 'px';
        }
        if((note.offsetLeft + note.offsetWidth) > notesContainer.offsetWidth - 15) {
            note.style.left = (notesContainer.offsetWidth - note.offsetWidth) - 15 + 'px';
        }
        note.style.opacity = 1;
    }
    isGrabbed = false;
});

window.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(isGrabbed) {
        note.style.left = (e.clientX + offset[0]) + 'px';
        note.style.top  = (e.clientY + offset[1]) + 'px';
    }
});

window.addEventListener('click', () => {
    contextMenu.classList.remove('visible');
})

notesContainer.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    contextMenu.style.top = e.clientY + 'px';
    contextMenu.style.left = e.clientX + 'px';
    contextMenu.classList.add('visible');
});

