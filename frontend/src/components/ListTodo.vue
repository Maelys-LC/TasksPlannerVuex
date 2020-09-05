<template>
    <div>
        <!-- <b-form id="form">        
            <b-input-group prepend="Filter by author" class="input">
                <b-input  type="text" v-model="author" class="blank"></b-input>
                <b-button @click="filterByAuthor" variant="outline-dark">Filter</b-button>                                 
            </b-input-group>
        </b-form> -->
        <section v-if="whatToDisplay != 'done'">
            <h2>Todo</h2>
            <draggable class="blogCards" v-model="listNotDone" group="tasks"  >
                
                <SingleTodo v-for="element in listNotDone" :key="element.id" :message="element"/>
            </draggable>
        </section>
        <section v-if="whatToDisplay != 'todo'">
            <h2>Done</h2>
            <draggable class="blogCards" v-model="listDone" group="tasks" >   
                        
                <SingleTodo v-for="element in listDone" :key="element.id" :message="element"/>                
            </draggable>
        </section>
    </div>   
</template>

<script>
    import SingleTodo from './SingleTodo.vue'
    import draggable from 'vuedraggable'

    export default {
        name: 'ListTodo',
        props: ['whatToDisplay'],
       
        components: {
            SingleTodo,
            draggable      
        },
        computed: {
            listDone: {
                get: function() {
                    return this.$store.getters.todoDone
                },
                set: function(value) {                    
                    this.$store.dispatch("UPDATEDONE", value)
                          
                }                
            },
            listNotDone: {
                get: function() {
                    return this.$store.getters.todoNotDone
                },
                set: function(value) {
                    this.$store.dispatch("UPDATETODO", value)
                    
                }
            }
        },
        
        // beforeMount() {
        //     this.filterList();
        // },
        // methods: {      
        //     filterList: function() {
        //         this.listDone = this.$store.getters.todoDone;
        //         this.listTodo = this.$store.getters.todoNotDone;
        //     }      
            // filterByAuthor: function() {
            //     if (this.author) {
            //         this.list = this.status
            //         this.list = this.list.filter(element => element.author.toLowerCase() === this.author.toLowerCase());
            //         console.log(this.list);
            //         console.log(this.author)
            //         this.author = "";
            //     }                
            // }            
        // }   
    }   
</script> 

<style scoped>
    div {
        display: flex;
    }
    section {
        width: 50%;
        margin: 0 auto 0 auto;
        /* border: 1px solid gainsboro;      */
    }
    h2 {
        font-size: 80px;
        background: white;
        opacity: 0.9;
    }
    .blogCards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        min-width: 100%;
        min-height: 50vh;
    }
   @media screen and (max-width: 1000px) {
        div {
            flex-direction: column;
        }
        section {
            width: 90%;
            margin-bottom: 20px;
        }
        h2 {
            font-size: 30px;
        }  
    }    
</style>