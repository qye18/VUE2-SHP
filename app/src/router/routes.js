import Home from '@/pages/home'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Search from '@/pages/search'
import Detail from '@/pages/detail'
import AccoutLogin from '@/pages/login/accountLogin'
import QrcodeLogin from '@/pages/login/qrcodeLogin'
import Related from '@/pages/detail/related'
import Recommend from '@/pages/detail/recommend'
import AddToCartSuccess from '@/pages/addToCartSuccess'
import ShoppingCart from '@/pages/shoppingCart'
import Trade from '@/pages/trade'
export default [
  {
    name:'home',
    path:'/home',
    component:Home,
    meta:{
      hasFooter:true,
      showTopNav:true,
      showLeftNav:true
    }
  },
  {
    name:'login',
    path:"/login",
    component:Login,
    redirect:{name:'accountLogin'},
    meta:{
      hasFooter:false,
    },
    children:[
      {
        name:'accountLogin',
        path:'accountLogin',
        component:AccoutLogin,
      },
      {
        name:'qrcodeLogin',
        path:'qrcodeLogin',
        component: QrcodeLogin
      }
    ]
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
      hasFooter:true,
      showTopNav:true,
      showLeftNav:false
    }
  },
  {
    name:'detail',
    path:'/detail/:id?',
    component:Detail,
    meta:{
      showTopNav:true,
      hasFooter:true,
    },
    children: [
      {
        name:'related',
        path:'related',
        component:Related,
      },
      {
        name:'recommend',
        path:'recommend',
        component:Recommend
      }
    ]

  },
  //重定向，跳转到redirect指定的路径
  {
    path:'*',
    redirect:'/home'
  },
  {
    name:'addToCartSuccess',
    path:'/addToCartSuccess',
    component:AddToCartSuccess,
    meta: {
      showTopNav:true,
      hasFooter:true,
    }
  },
  {
    name:'shoppingCart',
    path:'/shoppingCart',
    component:ShoppingCart,
    meta:{
      showTopNav:true,
      hasFooter:true,
    }
  },
  {
    name:'trade',
    path:'/trade',
    component:Trade,
    meta:{
      showTopNav:true,
      hasFooter:true,
    }
  }
]