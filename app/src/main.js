import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import TypeNav from './pages/home/typeNav';
import SlideShow from './pages/home/slideShow';
import store from '@/store';
import '@/mock/mockServer';
// import Swiper from 'swiper'
// import 'swiper/swiper-bundle.min.css'
import {MessageBox, Button, Pagination} from 'element-ui';
Vue.component(MessageBox.name,MessageBox);
Vue.component(Button.name,Button);
Vue.component(Pagination.name, Pagination);

import catGif from './assets/1.gif'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: catGif
});

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.component(TypeNav.name, TypeNav);
Vue.component(SlideShow.name, SlideShow);

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
