window.todos = function() {
  return {
    todos: [],
    newTodo: '',

    get active() {
      return this.todos.filter(todo => ! todo.completed);
    },

    get completed() {
      return this.todos.filter(todo => todo.completed);
    },

    addTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        body: this.newTodo,
        completed: false
      });

      this.newTodo = '';
    },

    deleteTodo(todo) {
      let position = this.todos.indexOf(todo);

      this.todos.splice(position, 1);
    }
  }
}
