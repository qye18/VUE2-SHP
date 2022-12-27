import VueRouter from "vue-router";
import Home from '@/pages/home'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Search from '@/pages/search'

export default new VueRouter({
  routes:[
    {
      name:'home',
      path:'/home',
      component:Home
    },
    {
      name:'login',
      path:"/login",
      component:Login
    },
    {
      name:'register',
      path:"/register",
      component:Register
    },
    {
      name:'search',
      path:"/search",
      component:Search
    },
    //重定向，跳转到redirect指定的路径
    {
      path:'*',
      redirect:'/home'
    }
  ]
})