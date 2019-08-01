import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from "./views/Signup.vue"
import Signout from "./views/Signout.vue"
import Login from "./views/Login.vue"
import GWC from "./views/GWC"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home'},
    { path: '/', name: 'login', component: Login },
    { path: '/about', name: 'about'},
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/signout', name: 'signout', component: Signout },
    { path: '/Login', name: 'Login', component: Login },
    { path: '/GWC', name: 'GWC', component: GWC }
  ]
})
