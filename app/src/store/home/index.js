import Vue from 'vue';
import Vuex from 'vuex';
import { reqCategoryList } from '@/api';
Vue.use(Vuex);

// const categoryListres = reqCategoryList();


const state = {
  categoryList:[],
};
const actions = {
  async categoryList({commit}) {
    // let categoryList = [];
    // reqCategoryList().then(
    //   (res) => {
    //     // console.log(res.data);
    //     res.data.forEach(category => {
    //       categoryList.push(category);
    //     });
    //   },
    //   (err) => {
    //     alert('错误：',err)
    //   }
    // )
    let result = await reqCategoryList();
    if(result.code == 200) {
      commit("CATEGORYLIST", result.data)
    }
    
  }
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  }
};
const getters = {};


export default {
  state,
  actions,
  mutations,
  getters
}
