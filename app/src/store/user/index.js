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
  async RegisterAccount({commit},user) {
    let result = await reqRegisterAccount(user);
    if (result.code == 200) {
      return '注册成功'
    } else {
      return Promise.reject(new Error(result.message))
    }
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
