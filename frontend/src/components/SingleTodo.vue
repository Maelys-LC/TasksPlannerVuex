<template>
    <!-- <div :class="!message.todo ? 'checked':''">
        <b-icon class="cursor" v-if="message.todo" icon="check2-circle" @click='toggle(message.id, message.todo)'></b-icon>
        <b-icon class="cursor" v-else icon="check-circle-fill" @click='toggle(message.id, message.todo)'></b-icon> 
        <p>{{message.name}} <span id="grey">by {{message.author}}</span></p>
        <b-icon class="cursor" icon="x-circle" @click='deleteTask(message.id)'></b-icon>
    </div> -->
    <b-card id="card" bg-variant="primary" text-variant="white" :header="message.name" class="text-center">
        <b-icon class="cursor" v-if="message.todo" icon="check2-circle" @click='toggle(message.id, message.todo)'></b-icon>
        <b-icon class="cursor" v-else-if="!message.todo" icon="check-circle-fill" @click='toggle(message.id, message.todo)'></b-icon> 
        <b-card-text>{{message.name}} <span id="grey">by {{message.author}}</span></b-card-text>
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
        border: 2px solid gray;   
        font-size: 20px;          
        padding: 10px;        
    }
    #card:hover {
        background: #343a40;
        color: whitesmoke;
    }
    #grey {
        color: gray;
        margin-left: 10px;
    }
    .cursor {
        cursor: pointer;
    }
    
</style>