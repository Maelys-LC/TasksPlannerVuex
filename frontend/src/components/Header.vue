<template>
    <header>
         <b-navbar id="nav" toggleable="lg" type="dark" variant="default">
            <b-navbar-brand><router-link id="name" to="/">Tasks Planner</router-link></b-navbar-brand>
            <b-navbar-nav id="links">
                <b-nav-item><router-link class="link" to="/new">New</router-link></b-nav-item>
                <b-nav-item><router-link class="link" to="/list">List</router-link></b-nav-item>
                <b-nav-item><router-link class="link" to="/done">Done</router-link></b-nav-item>
                <b-nav-item><router-link class="link" to="/todo">Todo</router-link></b-nav-item>               
            </b-navbar-nav>
        </b-navbar>        
        <!-- <nav>
            <p>Tasks Planner</p>
            <router-link class="link" to="/new">New</router-link>
            <router-link class="link" to="/list">List</router-link>
            <router-link class="link" to="/done">Done</router-link>
            <router-link class="link" to="/todo">Todo</router-link>
        </nav> -->
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style>
    header {
        height: 8vh;
        background: whitesmoke;
        opacity: 0.7;
    } 
    #nav {
        opacity: 0.7;
    }
    #name {
        font-size: 30px;
        color: #343a40;
    }
    #name:hover {
        color: goldenrod;
    }
    .link {
        font-size: 20px;
        color:brown;
        position: relative;
    }
    .link:hover {
        cursor: pointer;
        color: goldenrod;
    }  
   

    @media screen and (max-width: 1000px) {
        header {
            height: 17vh;
        }
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

