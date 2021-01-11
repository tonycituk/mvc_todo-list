function createElementFromHTML(htmlString) {
    let html = document.createRange().createContextualFragment(htmlString);
    return html;
}

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

function toogleModal(id) {
    let modal = document.getElementById(id);
    if (modal.classList.contains('is-active')) {
        modal.classList.remove('is-active');
    }
    else {
        modal.classList.add('is-active');
    }

}

function getTodoFromForm() {
    let todo = {};
    todo.title = document.getElementById('todoTitle').value;
    todo.description = document.getElementById('todoDescription').value;
    cancelTodo();
    return todo;
}

function cancelTodo() {
    document.getElementById('todoTitle').value = '';
    document.getElementById('todoDescription').value = '';
    toogleModal('myModal');
}