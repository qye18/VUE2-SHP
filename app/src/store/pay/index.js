import {reqPayInfo, reqPayStatus, reqOrderList} from '@/api'

const state = {
  pmtInfo: {},
  orderList: {}
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
  },
  async getOrderList({commit},data) {
    let result = await reqOrderList(data.page, data.limit);
    if (result.code == 200) {
      commit('GETORDERLIST', result.data);
    }
  }
};
const mutations = {
  GETPAYINFO(state, pmtInfo) {
    state.pmtInfo = pmtInfo;
  },
  GETORDERLIST(state, orderList) {
    state.orderList = orderList;
  }
};
const getters = {};


export default {
  state,
  actions,
  mutations,
  getters
}