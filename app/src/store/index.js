import Vue from 'vue'
import Vuex from 'vuex'

import home from './home'
import search from './search'
import detail from './detail'
import shoppingCart  from './shoppingCart'
import user from './user'
import trade from './trade'
import pay from './pay'

export default new Vuex.Store({modules:{
  home,search,detail,shoppingCart, user,trade,pay
}})

