// import Home from '@/pages/home'
// import Login from '@/pages/login'
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
import Pay from '@/pages/pay'
import PaySuccess from '@/pages/paySuccess'
import UserCenter from '@/pages/userCenter'
import MyOrder from '@/pages/userCenter/myOrder'
import GroupOrder from '@/pages/userCenter/groupOrder'

export default [
  {
    name:'home',
    path:'/home',
    component:() => import("@/pages/home"), // 路由懒加载
    meta:{
      hasFooter:true,
      showTopNav:true,
      showLeftNav:true
    }
  },
  {
    name:'login',
    path:"/login",
    component:() => import("@/pages/login"),
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
    },
    // 交易页面必须从购物页来，其他不行
    beforeEnter: (to, from, next) => {
      if (from.path == 'shoppingCart') {
        next();
      }else {
        next(false);
      }
    }
  },
  {
    name:'pay',
    path:'/pay',
    component:Pay,
    meta:{
      showTopNav:true,
      hasFooter:true,
    },
    beforeEnter: (to, from, next) => {
      if (from.path == 'trade') {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    name:'paySuccess',
    path:'/paySuccess',
    component:PaySuccess,
    meta:{
      showTopNav:true,
      hasFooter:true,
    },
    beforeEnter: (to, from, next) => {
      if (from.path == 'pay') {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    name:'userCenter',
    path:'/userCenter',
    component: UserCenter,
    meta:{
      showTopNav:true,
      hasFooter:true,
    },
    redirect: {name:'myOrder'},
    children:[
      {
        name:'myOrder',
        path:'myOrder',
        component: MyOrder,
        meta:{
          showTopNav:true,
          hasFooter:true,
        }
      },
      {
        name:'groupOrder',
        path:'groupOrder',
        component: GroupOrder,
        meta:{
          showTopNav:true,
          hasFooter:true,
        }
      }
    ]
  }
]