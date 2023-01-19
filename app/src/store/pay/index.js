import {reqPayInfo} from '@/api'

const state = {
  pmtInfo: {}
};
const actions = {
  async getPayInfo({commit},orderId) {
    let result = await reqPayInfo(orderId);
    if (result.code == 200) {
      commit('GETPAYINFO', result.data);
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