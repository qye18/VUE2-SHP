import {reqRegisterAccount,reqVerificationCode} from '@/api'
const state = {
  verificationCode:''
}
const actions = {
  async getVerificationCode({commit}, phone){
    let result = await reqVerificationCode(phone);
    if (result.code == 200) {
      commit('GETVERIFICATIONCODE',result.data);
    } else {
      alert(result.message)
    }
  },
  async RegisterAccount({commit},data) {
    let result = await reqRegisterAccount(data);
    console.log(result);
  }
}
const mutations = {
  GETVERIFICATIONCODE(state,verificationCode) {
    state.verificationCode = verificationCode;
  }
}
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}
