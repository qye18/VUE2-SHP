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
// import elementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import { Carousel, CarouselItem  } from 'element-ui';
import {MessageBox, Button} from 'element-ui';
Vue.component(MessageBox.name,MessageBox)
Vue.component(Button.name,Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// import {reqCategoryList} from '@/api/index'
// Vue.use(elementUI)
// Vue.component(Carousel.name, Carousel);
// Vue.component(CarouselItem.name, CarouselItem);

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
