import Vue from 'vue';
import Vuex from 'vuex';
import { reqCategoryList, reqBannerList, reqUnitList } from '@/api';
Vue.use(Vuex);

// const categoryListres = reqCategoryList();


const state = {
  categoryList:[],
  bannerList:[],
  unitList:[],
};
const actions = {
  async categoryList({commit}) {
    /* let categoryList = [];
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
    ) */
    let result = await reqCategoryList();
    if(result.code == 200) {
      commit("CATEGORYLIST", result.data)
    }
  },
  async getBannerList({commit}) {
    let result = await reqBannerList();
    // console.log(result);
    if (result.code == 200) {
      commit('GETBANNERLIST',result.data);
    }
  },
  async getUnitList({commit}) {
    let result = await reqUnitList();
    if (result.code == 200) {
    // console.log(result);
    commit('GETUNITLIST', result.data);
    }
  }
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETUNITLIST(state, unitList) {
    state.unitList = unitList;
  },
};
const getters = {};


export default {
  state,
  actions,
  mutations,
  getters
}
