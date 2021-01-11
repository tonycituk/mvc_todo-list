function notebookView() {
    return `
        <section class="section">
            <div class="container">
                <h1 class="title">
                    Hello class! 🎉
                </h1>
                <p class="subtitle">
                    This is a to-do list using <strong>MVC pattern</strong>!
                </p>
                <div class="field">
                    <button class="button is-info is-outlined is-pulled-right" onclick="toogleModal('myModal')">Add new to-do</button>
                </div>
            </div>
        </section>
        <section class="section container is-max-desktop" id="todo-list">
            <progress class="progress is-small is-info" max="100">20%</progress>
        </section>
        <div class="modal" id="myModal">
            <div class="modal-background" onclick="toogleModal('myModal')"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Fill the to-do form 📄</p>
                    <button class="delete" aria-label="close" onclick="toogleModal('myModal')"></button>
                </header>
                <section class="modal-card-body">
                    <form>
                        <div class="field">
                            <label class="label">Title</label>
                            <div class="control">
                                <input class="input" type="text" id="todoTitle" placeholder="e.g my urgent todo" required>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Description</label>
                            <div class="control">
                                <input class="input" type="text" id="todoDescription" placeholder="e.g. this is a todo" required>
                            </div>
                        </div>
                    </form>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success is-outlined" onclick="notebookControllerInstance.addTodo()">Save to-do</button>
                    <button class="button is-danger is-outlined" onclick="cancelTodo()">Cancel</button>
                </footer>
            </div>
        </div>
        <div class="modal" id="editModal">
            <div class="modal-background" onclick="toogleModal('editModal')"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Fill the to-do form 📄</p>
                    <button class="delete" aria-label="close" onclick="toogleModal('editModal')"></button>
                </header>
                <section class="modal-card-body">
                    <form>
                        <div class="field">
                            <label class="label">Title</label>
                            <div class="control">
                                <input class="input" type="text" id="editTodoTitle" placeholder="e.g my urgent todo" required>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Description</label>
                            <div class="control">
                                <input class="input" type="text" id="editTodoDescription" placeholder="e.g. this is a todo" required>
                            </div>
                        </div>
                    </form>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success is-outlined" onclick="notebookControllerInstance.editTodo()">Save to-do</button>
                    <button class="button is-danger is-outlined" onclick="cancelEditTodo()">Cancel</button>
                </footer>
            </div>
        </div>
        
    `;
}