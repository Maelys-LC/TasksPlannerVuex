<template>
    <div id="form">
        <hr class="my-4">
        <h1>Add a new task!</h1>
        <hr class="my-4">
        <b-form @submit.prevent="addTask">        
            <b-input-group prepend="Task" class="input">
                <b-input  type="text" placeholder="Todo name" v-model="task" id="blank1" required></b-input>                
            </b-input-group>     
            <b-input-group prepend="Author" class="input">
                <b-input type="text" placeholder="Author name" v-model="author" id="blank2" required></b-input>
            </b-input-group>
            <b-input-group prepend="Description" class="input">
                <b-input type="text" placeholder="Description" v-model="description" id="blank3" required></b-input>
            </b-input-group>
            <b-button v-if="task && author && description" id="button" @click="addTask">Add</b-button>
            <b-button v-else id="hidden" @click="addTask">Add</b-button>  
        </b-form>
    </div>    
</template>

<script>
    export default {
        name: "AddForm",
        data: function() {
            return {
                task: "",
                author: "",
                description: "",
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
                        description: this.description,
                        id: this.id + 1,
                        createdAt: date.toString(),
                        todo: true
                    })

                    let element = {
                        name: this.task,
                        author: this.author,
                        description: this.description,
                        id: this.id + 1,
                        createdAt: date.toString(),
                        todo: true
                    }

                    await this.$store.dispatch("ADD", element)
                    this.task = ""  
                    this.author = ""
                    this.description= ""
                    this.id++                  
                }                               
            }
        }    
    }
</script>

<style scoped>
    #form {
        background: whitesmoke;
        padding: 40px;
        opacity: 0.9;
    }
    h1 {
        font-size: 40px;
    }
    .input {
        width: 90%;
        margin: 0 auto 40px auto;        
    }
    #button, #hidden {
        font-size: 25px;
        background: #A17A64;
    }
    #hidden {
        background: whitesmoke;
    }

    @media screen and (max-width: 1000px) {
        #form {
            padding: 10px;
        }
        h1 {
            font-size: 20px;
        }
        .input {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto 10px auto;        
   
        }
        #blank1, #blank2, #blank3 {
            width: 90%;
            margin: 5px 0 5px 0;
        }
        #button, #hidden {
            font-size: 18px;
        }
    }
</style>