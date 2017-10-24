import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  // 文章列表数据
  articleList: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
