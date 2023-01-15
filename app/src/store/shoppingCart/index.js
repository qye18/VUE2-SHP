import {reqShoppingCartList} from '@/api'
const state = {
  shoppingCartList:[],
  cartInfoList:[]
};
const actions = {
  async getShoppingCartList({commit}){
    const result = await reqShoppingCartList();
    if (result.code == 200) {
      commit("GETSHOPPINGCARTLIST",result.data[0].cartInfoList)
    }
  }
};
const mutations = {
  GETSHOPPINGCARTLIST(state,cartInfoList) {
    state.cartInfoList = cartInfoList;
  }
};
const getters = {};

export default {
  state,actions,mutations,getters
}