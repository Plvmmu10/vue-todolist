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

            newTodo: '',
            error: ''
        }
    },
    methods: {
        addItem() {
            const newItem = {
                text: this.newTodo,
                done: false
            }

            if (this.newTodo != '') {
                this.todoList.push(newItem);
                this.newTodo = '';
            } else {
                this.error = true;
            }


        },
        completedTodo(index) {
            this.todoList[index].done = true;
        },
        deleteTodo(index) {
            this.todoList.splice(index, 1)
        }
    }
}).mount('#app');