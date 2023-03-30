const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [
                {
                    text: 'Completare il CSS',
                    done: false
                },
                {
                    text: 'Riscrivere la function',
                    done: false
                }
            ],

            newTodo: ''
        }
    },
    methods: {
        addItem() {
            const newItem = {
                text: this.newTodo,
                done: false
            }

            if (this.newTodo != '') {
                this.todoList.push(this.newItem)
            }
        },
        completedTodo(index) {
            this.todoList[index].done = true;
        },
        uncompletedTodo(index) {
            this.todoList[index].done = false;
        },
        deleteTodo(index) {
            this.todoList.splice(index, 1)
        }
    }
}).mount('#app');