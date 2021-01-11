class todoController{
    todo;
    todoView;

    constructor(todo, todoView){
        this.todo = todo;
        this.todoView = todoView;
    }

    renderTodo(){
        var HtmlTodo = createElementFromHTML(this.todoView(this.todo));
        return HtmlTodo;
    }
}