import Vuex from 'vuex'
import {reqSearchInfo} from '@/api'
const state = {
  searchList: {}
};
const actions = {
  async searchList({commit},params={}) {
    const result = await reqSearchInfo(params);
    console.log(result.data);
    commit('SEARCHLIST', result.data);
  }
};
const mutations = {
  SEARCHLIST(state, searchList) {
    state.searchList = searchList;
  }
};
const getters = {
  attrsList(state){
    return state.searchList.attrsList;  
  },
  goodsList(state){
    return state.searchList.goodsList;  
  },
  trademarkList(state){
    return state.searchList.trademarkList;  
  }
};


export default {
  state,
  actions,
  mutations,
  getters
}
// reqSearchList