<template>
    <header>
         <b-navbar id="nav" toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand><router-link id="name" to="/">Todo List</router-link></b-navbar-brand>
            <b-navbar-nav id="links">
                <b-nav-item><router-link class="link" to="/new">New</router-link></b-nav-item>
                <b-nav-item><router-link class="link" to="/list">List</router-link></b-nav-item>
                <b-nav-item><router-link class="link" to="/done">Done</router-link></b-nav-item>
                <b-nav-item><router-link class="link" to="/todo">Todo</router-link></b-nav-item>               
            </b-navbar-nav>
        </b-navbar>        
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style>
    #name {
        font-size: 30px;
        color: whitesmoke;
    }
    .link {
        font-size: 20px;
    }

    @media screen and (max-width: 1000px) {
        #nav {
            display: flex;
            flex-direction: column;
        }
        #links {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }
    }
</style>

