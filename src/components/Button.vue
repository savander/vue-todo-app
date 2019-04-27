<template>
    <button class="btn" @click="$emit('click', $event)">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "Button"
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
</style>