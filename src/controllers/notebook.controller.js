class notebookController {

    notebook;
    notebookView;
    constructor(notebook, notebookView) {
        this.notebook = notebook;
        this.notebookView = notebookView;
        this.renderNotebook();
        this.populateNotebook();

    }


    renderNotebook() {
        document.getElementById('root').appendChild(createElementFromHTML(this.notebookView()));
    }

    populateNotebook() {
        document.getElementById('todo-list').innerHTML = '';
        this.notebook.todos.forEach(todo => {
            let newTodo = new todoModel(todo.id, todo.title, todo.description, todo.status);
            var newtodoController = new todoController(newTodo, todoView);
            document.getElementById('todo-list').appendChild(newtodoController.renderTodo());
        });
    }

    addTodo(){
        let todoFromForm = getTodoFromForm();
        let newTodo = new todoModel(create_UUID(), todoFromForm.title, todoFromForm.description, "to-do");
        this.notebook.addTodo(newTodo);
        this.populateNotebook();
    }
    removeTodo(id){
        this.notebook.removeTodo(id);
        this.populateNotebook();
    }

    getTodo(id){
        let todo = this.notebook.getTodo(id);
        return todo;
    }
}