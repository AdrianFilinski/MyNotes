const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtns = document.getElementsByClassName('.delete-note')
const deleteAllBtn = document.querySelector('.delete-all')

const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textArea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectValue;

let cardID = 0;

const openPanel = () => {
    notePanel.style.display = 'flex';
}

const closePanel = () => {
    notePanel.style.display = 'none';
    error.style.visibility = 'hidden'
    textArea.value = '';
    category.selectedIndex = 0;
}

const addNote = () => {
    if (textArea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        createNote();
        error.style.visibility = 'hidden'
    } else {
        error.style.visibility = 'visibility'
    }
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
