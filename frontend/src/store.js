import Vuex from 'vuex'
import Vue from 'vue'
import 'es6-promise/auto'
import axios from 'axios'

Vue.use(Vuex)



export default new Vuex.Store ({
    state: {
        todoDone: [],
        todoNotDone: []
    },
    mutations: {
        ADD(state, element) {            
           if(element.todo) {
               state.todoNotDone.push(element);
           } else if (!element.todo) {
               state.todoDone.push(element);
           }  
        },
        PUT(state, id) {
           for (let element of state.todoNotDone) {
                if (element.id === id && element.todo) {
                    element.todo = false;
                    let index = state.todoNotDone.indexOf(element);
                    state.todoNotDone.splice(index, 1);
                    state.todoDone.push(element);
                    return null
                }                                 
            }

            for (let element of state.todoDone) {
              if (element.id === id && !element.todo) {
                    element.todo = true;
                    let index = state.todoDone.indexOf(element);
                    state.todoDone.splice(index, 1);
                    state.todoNotDone.push(element);
                }
            }
            
        },
        DELETE(state, id) {
            for (let element of state.todoNotDone) {
                if (element.id === id) {
                    let index = state.todoNotDone.indexOf(element);
                    state.todoNotDone.splice(index, 1);
                }
            }
            for (let element of state.todoDone) {
                if (element.id === id) {
                    let index = state.todoDone.indexOf(element);
                    state.todoDone.splice(index, 1);
                }
            }
        },
        UPDATEDONE(state, value) {  
            for (let element of value) {
                if (element.todo) {
                    element.todo = false
                    axios.put("http://localhost:8080/tasks/" + element.id, {todo: false})
                  
                }
            }
           
            state.todoDone = value;           
        },
        UPDATETODO(state, value) {  
            for (let element of value) {
                if (!element.todo) {
                    element.todo = true
                    axios.put("http://localhost:8080/tasks/" + element.id, {todo: true})
                }
            }          
            state.todoNotDone = value;
        }
    },
    actions: {
        ADD(context, element) {
            if (element.name && element.author && element.description && element.id >= 0 && element.createdAt && element.todo === true || element.todo === false) {
                context.commit("ADD", element)
            }            
        },
        PUT(context, id) {
            context.commit("PUT", id)
        },
        DELETE(context, id) {
            context.commit("DELETE", id)
        },
        UPDATEDONE(context, value) {
            context.commit("UPDATEDONE", value)
        },
        UPDATETODO(context, value) {
            context.commit("UPDATETODO", value)
        }
    },
    getters: {
        // todoFiltered(state) {
        //     return function(whatToDisplay) {
        //         if (whatToDisplay === "done") {
        //             return state.todo.filter(element => !element.todo)
        //         } else if (whatToDisplay === "todo") {
        //             return state.todo.filter(element => element.todo)
        //         } else if (whatToDisplay === "all") {
        //             return state.todo
        //         }
        //     }
        // },
        todoDone(state) {
            // state.todoDone = state.todo.filter(element => !element.todo)  
                                      
            return state.todoDone
        },
        todoNotDone(state) {
            
            // state.todoNotDone = state.todo.filter(element => element.todo)            
            return state.todoNotDone
        }
    }      
})