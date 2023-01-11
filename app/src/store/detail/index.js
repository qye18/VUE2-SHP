import {reqItemDetail} from '@/api'

const state = {
  sku:{},
};
const actions = {
  async getItemDetail({commit},skuid){
    let result = await reqItemDetail(skuid);
    // console.log('##########');
    // console.log(result.data);
    if (result.code === 200) {
      commit('GETITEMDETAIL',result.data);
    }
  }
};
const mutations = {
  GETITEMDETAIL(state,sku){
    state.sku = sku;
  }
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