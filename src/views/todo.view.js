function todoView(todo) {
    return `
        <div class="card mb-6">
            <header class="card-header">
                <p class="card-header-title">
                    ${todo.title}
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    ${todo.description}
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item">Edit</a>
                <a class="card-footer-item" onclick="notebookControllerInstance.removeTodo('${todo.id}')">Done</a>
            </footer>
        </div>
    `;
}