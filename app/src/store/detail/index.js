import {reqItemDetail, reqAddCart} from '@/api'
import { createId } from "@/utils/uuid_token";

const state = {
  sku:{},
  uuid_token:createId()
};
const actions = {
  async getItemDetail({commit},skuid){
    let result = await reqItemDetail(skuid);
    // console.log('##########');
    // console.log(result.data);
    if (result.code === 200) {
      commit('GETITEMDETAIL',result.data);
    }
  },
  async addToCart({commit},{id,quantity}) {
    let result = await reqAddCart(id, quantity);
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('加入购物车失败'));
    }
  }
};
const mutations = {
  GETITEMDETAIL(state,sku){
    state.sku = sku;
  },
};
const getters = {
  categoryView(state){
    return state.sku.categoryView || {};
  },
  price(state) {
    return state.sku.price || {};
  },
  skuInfo(state) {
    return state.sku.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.sku.spuSaleAttrList || [];
  },
  valueSkuJson(state) {
    return state.sku.valueSkuJson || {};
  }
  ,
};

export default {
  state,actions,mutations,getters
}