import {reqShoppingCartList} from '@/api'
const state = {
  shoppingCartList:[]
};
const actions = {
  async getShoppingCartList({commit}){
    const result = await reqShoppingCartList();
    console.log(result);
  }
};
const mutations = {};
const getters = {};

export default {
  state,actions,mutations,getters
}