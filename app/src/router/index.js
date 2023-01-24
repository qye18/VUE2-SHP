import VueRouter from "vue-router";
import Vue from 'vue';
import routes from './routes.js';
import store from '@/store';
const router = new VueRouter({
  routes,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    // 跳转路由后，跳到页面最上方
    return { y: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  const token = store.state.user.token;
  const userName = store.state.user.userName;
  // next();
  // 已登录 
  if (token) {
    // 去login，阻止
    if (to.path == '/login') {
      next(false);
    } // 去其他地方 
    else {
      if (userName) {
        next();
      } else {
        // 登录了但没有userName
        try {
          await store.dispatch('getUserInfo');
          next();
        } catch (error) {
          //token过期,退出登录，让用户重新登录
          await store.dispatch('logout');
          next('/login')
        }
      }
    }
  }
  // 未登录
  else {
    // console.log(to.path);
    if (to.path.indexOf('userCenter') != -1 || to.path.indexOf('pay') != -1 ||
    to.path.indexOf('trade') != -1) {
      next('/login?redirect='+to.path);
    } else {
      next();
    }
  }
})


export default router