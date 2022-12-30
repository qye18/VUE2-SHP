import Vue from 'vue'
import Vuex from 'vuex'
import homeStore from './home'

export default new Vuex.Store({modules:{
  homeStore: homeStore
}})

