import {reqUserAddress,reqOrderInfo, reqMakeOrder} from '@/api'

const state = {
  orderInfo:{},
};
const actions = {
  async getUserAddress({commit}) {
    let result = await reqUserAddress();
    // console.log(result);
  },
  async getOrderInfo({commit}) {
    let result = await reqOrderInfo();
    // console.log(result);
    if (result.code == 200) {
      commit('GETORDERINFO',result.data);
    }
  },
  async makeOrder({commit},data) {
    const {tradeNo, userInfo} = data;
    let result = await reqMakeOrder(tradeNo, userInfo);
    if (result.code == 200) {
      return result.data;
    } {
      return Promise.reject(new Error(result.message))
    }
  }

};
const mutations = {
  GETORDERINFO(state,orderInfo) {
    state.orderInfo = orderInfo;
  }
};
const getters = {
  orderDetailList(state) {
    return state.orderInfo.detailArrayList || [];
  },
  totalAmount(state) {
    return state.orderInfo.totalAmount || 0;
  },
  totalNum(state) {
    return state.orderInfo.totalNum || 0;
  },
  tradeNo(state) {
    return state.orderInfo.tradeNo || '';
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}