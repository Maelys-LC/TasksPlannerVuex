<template>
    <!-- <div :class="!message.todo ? 'checked':''">
        <b-icon class="cursor" v-if="message.todo" icon="check2-circle" @click='toggle(message.id, message.todo)'></b-icon>
        <b-icon class="cursor" v-else icon="check-circle-fill" @click='toggle(message.id, message.todo)'></b-icon> 
        <p>{{message.name}} <span id="grey">by {{message.author}}</span></p>
        <b-icon class="cursor" icon="x-circle" @click='deleteTask(message.id)'></b-icon>
    </div> -->
    <b-card id="card" v-if="message.todo" border-variant="warning" align="center" :header="message.name" class="text-center">
        <b-icon class="cursor" icon="check2-circle" @click='toggle(message.id, message.todo)'></b-icon>
        <b-card-text>{{message.description}} <span id="grey">by {{message.author}}</span></b-card-text>
        <b-icon class="cursor" icon="x-circle" @click='deleteTask(message.id)'></b-icon>
    </b-card>
    <b-card id="card" v-else-if="!message.todo" border-variant="success" :header="message.name" class="text-center">
        <b-icon class="cursor" icon="check-circle-fill" @click='toggle(message.id, message.todo)'></b-icon> 
        <b-card-text>{{message.description}} <span id="grey">by {{message.author}}</span></b-card-text>
        <b-icon class="cursor" icon="x-circle" @click='deleteTask(message.id)'></b-icon>
    </b-card>
</template>

<script>
    export default {
        name: 'SingleTodo',
        props: ['message'],
        methods: {
            toggle: async function(id, todo) {
                await this.axios.put("http://localhost:8080/tasks/" + id, {todo: !todo});
                // this.$emit("onchange");
                await this.$store.dispatch("PUT", id); 
            },
            deleteTask: async function(id) {
                await this.axios.delete("http://localhost:8080/tasks/" + id);
                // this.$emit("onchange");
                await this.$store.dispatch("DELETE", id);
            }
        }                 
    }
</script> 

<style scoped> 
    #card {
        font-size: 20px;          
        padding: 10px;
        width: 30%;
        opacity: 0.9;
        min-width: 10em;
        /* margin: auto;         */
    }
    #card:hover {
        background: #343a40;
        color: whitesmoke;
    }
    #grey {
        color: orange;
        margin-left: 10px;
    }
    .cursor {
        cursor: pointer;
    }
    @media screen and (max-width: 1000px) {
        #card {
            width: 100%;
        }
    }
    
</style>