import Vue from 'vue';
import Vuex from 'vuex';
import { reqCategoryList } from '@/api';
Vue.use(Vuex);

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

const state = {
  categoryList,
};
const actions = {};
const mutations = {};
const getters = {};


export default {
  state,
  actions,
  mutations,
  getters
}
