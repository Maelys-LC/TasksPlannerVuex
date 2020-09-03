<template>
    <div>
        <hr class="my-4">
        <p>Add a new task!</p>
        <hr class="my-4">
        <b-form @submit.prevent="addTask">        
            <b-input-group prepend="Task" class="input">
                <b-input  type="text" placeholder="Todo name" v-model="task" class="blank"></b-input>                
            </b-input-group>     
            <b-input-group prepend="Author" class="input">
                <b-input type="text" placeholder="Author name" v-model="author" class="blank"></b-input>
            </b-input-group>
            <b-button variant="outline-dark" @click="addTask"><b-icon icon="file-plus"></b-icon>Add</b-button> 
        </b-form>
        <img src="../assets/pompompurin.gif" alt="gif pompompurin">
    </div>    
</template>

<script>
    export default {
        name: "AddForm",
        data: function() {
            return {
                task: "",
                author: "",
                id: 0                
            }
        },
        beforeMount(){
            this.getBiggest();
        },
        methods: {
            getBiggest: async function(){
                let results = await this.axios.get('http://localhost:8080/biggest')

                if (results.data) {
                    this.id = results.data.id;
                }
            },
            addTask: async function(){
                if (this.task && this.author) {
                    
                    let date = new Date()
                    
                    await this.axios.post('http://localhost:8080/tasks', {
                        name: this.task,
                        author: this.author,
                        id: this.id + 1,
                        createdAt: date.toString(),
                        todo: true
                    })

                    let element = {
                        name: this.task,
                        author: this.author,
                        id: this.id + 1,
                        createdAt: date.toString(),
                        todo: true
                    }

                    await this.$store.dispatch("ADD", element)
                    this.task = ""  
                    this.author = ""
                    this.id++                  
                }                               
            }
        }    
    }
</script>

<style scoped>
    p {
        font-size: 20px;
    }
    .input {
        width: 90%;
        margin: 0 auto 40px auto;        
    }
    img {
        width: 20%;
    }
    @media screen and (max-width: 1000px) {
        p {
            font-size: 18px;
        }
        .input {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto 10px auto;        
   
        }
        .blank {
            width: 90%;
            margin: 5px 0 5px 0;
        }
    }
</style>