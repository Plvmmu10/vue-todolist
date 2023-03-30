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

            if (this.newItem != '') {
                this.todoList.push(newItem)
            }
        },
        completedTodo(index) {
            this.todoList[index].done = true;
        }
    }
}).mount('#app');