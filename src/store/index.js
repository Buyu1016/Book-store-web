import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'
import shop from './shooping.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    shop,
  },
  strict: true
})
