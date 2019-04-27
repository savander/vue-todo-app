<template>
    <div id="app">
        <div class="Todo">
            <div class="Todo-list">
                <transition-group name="fade" tag="ul">
                    <TodoItem
                        v-for="(task, index) in getTasks"
                        :key="task.id"
                        :task="task"
                        :isEven="!!(index % 2)"
                        @toggleTask="toggleTaskCompletion"
                    />
                </transition-group>
            </div>

            <form class="Todo-form" @submit.prevent="addTask">
                <label class="Todo-form-input" :class="{hasValue: task.trim()}">
                    <input type="text" v-model="task">
                    <span>Task description...</span>
                </label>

                <Button type="submit">+</Button>

                <Button @click.prevent="showCompleted = !showCompleted">
                    Show Completed
                    <font-awesome-icon
                        :icon="showCompleted ? 'check-square' : 'square'"
                    />
                </Button>
            </form>
        </div>
    </div>
</template>

<script>
    import TodoItem from './components/TodoItem';
    import Button from './components/Button';

    export default {
        name: 'app',

        components: {
            TodoItem, Button
        },

        data() {
            return {
                taskList: [],
                task: '',
                showCompleted: true
            }
        },

        methods: {
            addTask() {
                // Task body
                const defaultTask = {
                    id: Math.round(Date.now() + Math.random()),
                    createdAt: Date.now(),
                    isCompleted: false,
                    task: ''
                };
                const task = this.task.trim();

                if (task.length < 3)
                    return;

                this.taskList.push({
                    ...defaultTask,
                    task
                });
                this.task = '';
            },

            toggleTaskCompletion(id) {
                const item = this.taskList.find(item => item.id === id);
                item.isCompleted = !item.isCompleted;
            },
        },

        computed: {
            getTasks() {
                return this.showCompleted ? this.taskList : this.taskList.filter(item => !item.isCompleted);
            }
        }
    }
</script>


<style>
    @import url('https://fonts.googleapis.com/css?family=Hind:400,700&subset=latin-ext');

    *, *:after, *:before {
        box-sizing: border-box;
    }

    body {
        font-family: 'Hind', sans-serif;
        margin: 0;
        padding: 5rem 1.5rem;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    .Todo {
        max-width: 600px;
        margin: 0 auto;
    }

    .Todo-list {
        border-radius: 10px;
        overflow: hidden;
    }

    .Todo-form {
        display: flex;
        align-items: stretch;
        justify-content: center;
        margin-top: 0.5rem;
    }

    .Todo-form .btn:not(:last-child) {
        margin-right: 0.5rem;
    }

    .Todo-form-input {
        position: relative;
        display: flex;
        align-items: stretch;
    }

    .Todo-form-input input {
        all: unset;
        background-color: aliceblue;
        border: 1px solid lightsteelblue;
        border-radius: 3px;
        margin-right: 0.5rem;
        cursor: text;
        padding: 0.5rem 1rem;
    }

    .Todo-form-input span {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        pointer-events: none;
        padding: 0.5rem 1rem;
        transition: all 150ms ease-in-out;
    }

    .Todo-form-input input:focus + span, .Todo-form-input.hasValue span {
        transform: translateY(75%);
        font-size: 0.75rem;
    }


    .fade-enter-active, .fade-leave-active {
        transition: opacity 150ms !important;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0 !important;
    }
</style>
