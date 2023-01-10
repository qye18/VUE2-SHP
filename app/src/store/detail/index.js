import {reqItemDetail} from '@/api'

const state = {
  sku:{},
};
const actions = {
  async getItemDetail({commit},skuid){
    let result = await reqItemDetail(skuid);
    console.log('##########');
    console.log(result.data);
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
  categoryView(){
    // return state.sku.categoryView
  }
};

export default {
  state,actions,mutations,getters
}