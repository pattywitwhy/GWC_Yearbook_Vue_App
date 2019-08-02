import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from "./views/Signup.vue"
import Signout from "./views/Signout.vue"
import Login from "./views/Login.vue"
import StudentsIndex from "./views/StudentsIndex.vue"
import StudentsShow from "./views/StudentsShow.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/signout', name: 'signout', component: Signout },
    { path: '/login', name: 'login', component: Login },
    { path: '/home', name: 'home', component: Home},
    { path: '/students', name: 'students-index', component: StudentsIndex },
    { path: '/students/:id', name: 'students-index', component: StudentsIndex },
  ]
})
