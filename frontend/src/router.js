import Vue from "vue";
import Router from "vue-router";
import AddForm from './components/AddForm.vue'
import ListTodo from './components/ListTodo.vue'
import Home from './components/Home.vue'


Vue.use(Router);

export default new Router ({
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/new",
            component: AddForm
        },
        {
            path: "/list",
            component: ListTodo,
            props: {whatToDisplay: "all"}
        },
        {
            path: "/done",
            component: ListTodo,
            props: {whatToDisplay: "done"}
        },
        {
            path: "/todo",
            component: ListTodo,
            props: {whatToDisplay: "todo"}
        }
       
    ]
})