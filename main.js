const vue = new Vue(
    {
        el: '#app',
        data: {
            newtodo:'',
            todos: []
        },
        methods: {
            addTodo() {
                if (this.newtodo.trim().length > 0) {
                    const newTodo0bj = {
                        text: this.newtodo.trim(),
                        done: false
                    };
                    this.todos.push(newTodo0bj);
                    this.newtodo = '';
                }
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            },
            lineThrough(index) {
                this.todos[index].done = !this.todos[index].done;
            }
        }
    }
)