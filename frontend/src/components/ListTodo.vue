<template>
    <div>
        <!-- <b-form id="form">        
            <b-input-group prepend="Filter by author" class="input">
                <b-input  type="text" v-model="author" class="blank"></b-input>
                <b-button @click="filterByAuthor" variant="outline-dark">Filter</b-button>                                 
            </b-input-group>
        </b-form> -->
        <section>
            <h2>Todo</h2>
            <draggable v-model="listNotDone">
                <SingleTodo v-for="element in listNotDone" :key="element.id" :message="element"/>
            </draggable>
        </section>
        <section>
            <h2>Done</h2>
            <draggable v-model="listDone">                
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
        // props: ['whatToDisplay'],
        // data: function() {
        //     return {
        //         listDone: [],
        //         listTodo: []
        //         // author: "",
        //         // status: ""
        //     }
        // },
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
                    if (this.whatToDisplay === "all") {
                        this.$store.dispatch("UPDATEDONE", value)
                    }
                }                
            },
            listNotDone: {
                get: function() {
                    return this.$store.getters.todoNotDone
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
    
</style>