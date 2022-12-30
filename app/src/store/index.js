import Vue from 'vue';
import VueX from 'vuex';
import { reqCategoryList } from '@/api';
Vue.use(VueX);

// const categoryListres = reqCategoryList();
let categoryList = [];
reqCategoryList().then(
  (res) => {
    // console.log(res.data);
    res.data.forEach(category => {
      categoryList.push(category);
    });
  },
  (err) => {
    alert('错误：',err)
  }
)

const actions = {};
const mutations = {};
const state = {
  categoryList,
};


export default new VueX.Store({
  actions,
  mutations,
  state
})


