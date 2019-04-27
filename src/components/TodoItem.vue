<template>
    <li
        class="Todo-item"
        :class="{isEven, isCompleted}"
    >
        <div
            class="Todo-item-task"
            :class="{isCompleted}"
        >
            {{task.task}}

            <span class="Todo-item-date">
                {{(new Date(task.createdAt)).toUTCString()}}
            </span>
        </div>

        <Button @click="toggleTaskCompletion(task.id)">
            <font-awesome-icon
                :icon="isCompleted ? 'check-square' : 'square'"
            />
        </Button>
    </li>
</template>

<script>
    import Button from './Button';

    export default {
        name: "TodoItem",

        components: {
            Button
        },

        props: {
            task: {
                type: Object
            },
            isEven: {
                type: Boolean,
                required: true
            }
        },

        methods: {
            toggleTaskCompletion(id) {
                this.$emit('toggleTask', id);
            }
        },

        computed: {
            isCompleted() {
                return this.task.isCompleted;
            }
        }
    }
</script>

<style scoped>
    .Todo-item {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1.5rem;
        background-color: aliceblue;
        word-break: break-all;
    }

    .Todo-item:not(:last-child) {
        margin-bottom: 0.25rem;
    }

    .Todo-item.isEven {
        color: midnightblue;
        background-color: lightsteelblue;
    }

    .Todo-item.isCompleted {
        color: #444;
        background-color: lightgray;
    }

    .Todo-item.isCompleted.isEven {
        background-color: darkgray;
    }

    .Todo-item-task {
        display: flex;
        flex-direction: column;
        margin-right: 0.5rem;
        line-height: 1em;
    }

    .Todo-item-task.isCompleted {
        text-decoration: line-through;
    }

    .Todo-item-date {
        font-size: 0.75rem;
    }
</style>