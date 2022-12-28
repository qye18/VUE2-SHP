import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import TypeNav from './pages/home/typeNav'
import SlideShow from './pages/home/slideShow'

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.component(TypeNav.name, TypeNav);
Vue.component(SlideShow.name, SlideShow);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
