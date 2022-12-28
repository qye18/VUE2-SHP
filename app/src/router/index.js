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
      component:Home,
      meta:{
        hasFooter:true
      }
    },
    {
      name:'login',
      path:"/login",
      component:Login,
      meta:{
        hasFooter:false
      }
    },
    {
      name:'register',
      path:"/register",
      component:Register,
      meta:{
        hasFooter:false
      }
    },
    {
      name:'search',
      // ?表示params参数可传可不传，如果不加但是没有传参数，那url就会出错
      path:'/search/:result?',
      component:Search,
      meta:{
        hasFooter:true
      }
    },
    //重定向，跳转到redirect指定的路径
    {
      path:'*',
      redirect:'/home'
    }
  ]
})