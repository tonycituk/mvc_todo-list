class notebookModel {
    todos;
    constructor() {
        this.todos = this.getStorageTodos();
    }

    getStorageTodos() {
        let storageTodos;
        if (localStorage.hasOwnProperty('todos')) {
            storageTodos = JSON.parse(localStorage.getItem('todos'));
        }
        else {
            storageTodos = [{ title: "Hello", description: "This is a list!", id: create_UUID(), status: "to-do" },
            { title: "Hello", description: "This is a list!", id: create_UUID(), status: "to-do" }
            ];
        }
        return storageTodos;
    }

    addTodo(todo) {
        this.todos.push(todo);
        this.saveTodosToStorage();
    }

    saveTodosToStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveTodosToStorage();
    }

    getTodo(id) {
        let todo = this.todos.find(x => todo.id === id);
        return todo;
    }
}