<template>
    <div>
        <h1 id="titre">Tasks Planner</h1> 
        <hr class="my-4">
        <h2>An easy to use tasks planner, allowing you to create new tasks, to check and uncheck them, to delete them and to filter them by author.</h2>
        <hr class="my-4">
        <h3>Let's get to work!</h3>
        <router-link to="/new"><b-button id="button">Create a task</b-button></router-link>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    div {
        background: whitesmoke;
        padding: 40px;
        opacity: 0.9;
    }
    #titre {
        font-size: 100px;
        
        margin-bottom: 30px;
    } 
    h2 {
        font-size: 30px;
    }
    h3 {
        margin-top: 100px;
        margin-bottom: 50px;
    }
    #button {
        background: gray;
        padding: 10px;
        font-size: 25px;
    }
    #button:hover {
        background: #A17A64;
    }
    @media screen and (max-width: 1000px) {
        #titre {
            font-size: 40px;
            margin-bottom: 10px;
        } 
        h2 {
            font-size: 18px;
        }        
        h3 {
            font-size: 18px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        #button {
            font-size: 18px;
        }
    }
</style>