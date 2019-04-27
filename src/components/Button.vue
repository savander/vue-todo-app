<template>
    <button
        class="btn"
        :class="{danger}"
        @click="$emit('click', $event)"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            danger: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>

    .btn {
        all: unset;
        padding: 0.5rem 1.5rem 0.35rem;
        line-height: 1em;
        cursor: pointer;
        color: aliceblue;
        background-color: cornflowerblue;
        border-radius: 3px;
        border-bottom: 2px solid royalblue;
        box-shadow: 0 5px 5px -5px darkslateblue;
        transition: all 150ms ease-in-out;
    }

    .btn:hover {
        transform: scale(1.05);
        box-shadow: 0 5px 5px -3px darkslateblue;
    }

    .btn.danger {
        color: white;
        background-color: orangered;
        box-shadow: 0 5px 5px -5px darkred;
        border-color: darkred;
    }
    .btn.danger:hover {
        box-shadow: 0 5px 5px -3px darkred;
    }
</style>