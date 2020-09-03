import Vuex from 'vuex'
import Vue from 'vue'
import 'es6-promise/auto'

Vue.use(Vuex)



export default new Vuex.Store ({
    state: {
        todo: [],
        todoDone: [],
        todoNotDone: []
    },
    mutations: {
        ADD(state, element) {            
           state.todo.push(element);         
        },
        PUT(state, id) {
            for (let element of state.todo) {
                if (element.id === id) {
                    element.todo = !element.todo
                }
            }
        },
        DELETE(state, id) {
            for (let element of state.todo) {
                if (element.id === id) {
                    let index = state.todo.indexOf(element);
                    state.todo.splice(index, 1);
                }
            }
        },
        UPDATEDONE(state, value) {
            state.todoDone = value;
        }
    },
    actions: {
        ADD(context, element) {
            if (element.name && element.author && element.id >= 0 && element.createdAt && element.todo === true || element.todo === false) {
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
        }
    },
    getters: {
        todoFiltered(state) {
            return function(whatToDisplay) {
                if (whatToDisplay === "done") {
                    return state.todo.filter(element => !element.todo)
                } else if (whatToDisplay === "todo") {
                    return state.todo.filter(element => element.todo)
                } else if (whatToDisplay === "all") {
                    return state.todo
                }
            }
        },
        todoDone(state) {
            return state.todo.filter(element => !element.todo)
        },
        todoNotDone(state) {
            return state.todo.filter(element => element.todo)
        }
    }      
})