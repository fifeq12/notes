let elementX;
let elementY;

function dragStart(e) {
    this.style.opacity = '0.4';
    let test = dragElement.getBoundingClientRect();
    elementX = (e.clientX - test.x);
    elementY = (e.clientY - test.y);
}

function dragEnd(e) {
    this.style.opacity = '1';
    if(e.clientY > 200 && e.clientX > 200) {
        dragElement.style.top = e.clientY - elementY + 'px';
        dragElement.style.left = e.clientX - elementX + 'px';
    }
}
//
//function dragOver(e) {
//    e.preventDefault();
//    console.log('over')
//}
//
//function dragEnter(e) {
//    console.log('enter')
//}
//
//function dragLeave(e) {
//    console.log('leave')
//}
//
//function drop() {
//    console.log('drop');
//    this.append(dragElement);
//}
//

const dragElement = document.querySelector('.note');
//const dropArea = document.querySelector('.drop-area');
//
dragElement.addEventListener('dragstart', dragStart);
dragElement.addEventListener('dragend', dragEnd);
//
//dropArea.addEventListener('dragover', dragOver)
//dropArea.addEventListener('dragenter', dragEnter)
//dropArea.addEventListener('dragleave', dragLeave)
//dropArea.addEventListener('drop', drop)

