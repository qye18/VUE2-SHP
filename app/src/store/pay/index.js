import {reqPayInfo, reqPayStatus} from '@/api'

const state = {
  pmtInfo: {}
};
const actions = {
  async getPayInfo({commit},orderId) {
    let result = await reqPayInfo(orderId);
    if (result.code == 200) {
      commit('GETPAYINFO', result.data);
    }
  },
  async getPayStatus({commit},orderId) {
    let result = await reqPayStatus(orderId);
    console.log(result);
    if (result.code == 200) {
      return 200
    } else {
      return 0
    }
  }
};
const mutations = {
  GETPAYINFO(state, pmtInfo) {
    state.pmtInfo = pmtInfo;
  }
};
const getters = {};


export default {
  state,
  actions,
  mutations,
  getters
}