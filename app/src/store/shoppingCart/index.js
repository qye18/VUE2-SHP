import {reqShoppingCartList,reqDeleteCartItem} from '@/api'
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
  },
  async deleteCartItem({commit},skuId) {
    const result = await reqDeleteCartItem(skuId);
    if (result.code == 200) {
      return '删除商品成功';
    } else {
      return Promise.reject(new Error('删除商品失败'));
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