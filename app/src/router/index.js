import VueRouter from "vue-router";
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import Search from '../pages/search'

export default new VueRouter({
  route:{
    name:'home',
    path:'/home',
    component:Home
  },
  route: {
    name:'login',
    path:"/login",
    component:Login
  },
  route: {
    name:'register',
    path:"/register",
    component:Register
  },
  route: {
    name:'search',
    path:"/search",
    component:Search
  },
})