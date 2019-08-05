import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Home from './views/Home.vue'
import Signup from "./views/Signup.vue"
import Signout from "./views/Signout.vue"
import Login from "./views/Login.vue"
import UsersIndex from "./views/UsersIndex.vue"
import UsersShow from "./views/UsersShow.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/signout', name: 'signout', component: Signout },
    { path: '/login', name: 'login', component: Login },
    { path: '/home', name: 'home', component: Home},
    { path: '/index', name: 'index', component: Index},
    { path: '/users', name: 'users-index', component: UsersIndex },
    { path: '/users/:id', name: 'users-show', component: UsersShow },
  ]
})
