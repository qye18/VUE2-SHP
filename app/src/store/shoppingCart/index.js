import {reqShoppingCartList,reqDeleteCartItem,reqCartItemChecked} from '@/api'
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
  },
  deleteAllCheckedItem(context){
    let promiseAll = [];
    context.state.cartInfoList.forEach(element => {
      if (element.isChecked) {
        let p = context.dispatch('deleteCartItem',element.skuId);
        promiseAll.push(p);
      }
    })
    return Promise.all(promiseAll);
  }
  ,
  async checkCartItem({commit},{skuId,isChecked}) {
    let result = await reqCartItemChecked(skuId,isChecked);
    if (result.code == 200) {
      return '改变isChecked状态成功'
    } else {
      return Promise.reject(new Error('改变isChecked状态失败'))
    }
  },
  checkAllCartItem(context,isChecked) {
    // console.log(context.state.cartInfoList);
    let promiseAll = [];
    context.state.cartInfoList.forEach(element => {
      let p = context.dispatch('checkCartItem', {skuId:element.skuId, isChecked})
      promiseAll.push(p);
    });
    return Promise.all(promiseAll);
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