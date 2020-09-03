<template>
    <div>
        <hr class="my-4">
        <p>An easy to use todo list, allowing you to create new tasks, to check and uncheck them, and to delete them.</p>
        <hr class="my-4">
        <img src="../assets/gif.gif" alt="gif pompompurin">
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    p {
        font-size: 20px;
    }
    img {
        width: 30%;
    }
    @media screen and (max-width: 1000px) {
        p {
            font-size: 18px;
        }
    }
</style>