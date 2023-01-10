import VueRouter from "vue-router";
import Vue from 'vue'
import routes from './routes.js'

export default new VueRouter({
  routes,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    // 跳转路由后，跳到页面最上方
    return {y:0}
  }
})