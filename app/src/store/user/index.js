import {reqRegisterAccount,reqVerificationCode, reqUserLogin,reqUserInfo} from '@/api'
const state = {
  verificationCode:'',
  token:localStorage.getItem('TOKEN'),
  userInfo:{}
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
  },
  async getUserLogin({commit},user) {
    let result = await reqUserLogin(user);
    // console.log(result);
    if (result.code == 200) {
      commit('GETUSERLOGIN',result.data.token);
      localStorage.setItem('TOKEN',result.data.token)
      return '登录成功'
    } else {
      return Promise.reject(new Error('登录失败'))
    }
  },
  async getUserInfo({commit}) {
    let result = await reqUserInfo();
    if (result.code == 200) {
      commit('GETUSERINFO',result.data);
      return '登录后获取用户信息成功';
    } else {
      return Promise.reject(new Error('登录后获取信息失败'));
    }
  }
}
const mutations = {
  GETVERIFICATIONCODE(state,verificationCode) {
    state.verificationCode = verificationCode;
  },
  GETUSERLOGIN(state,token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  }
}
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}
