import * as types from './mutaion-types'

export default {
  /**
   * 获取文章列表
   *
   * @param {any} state
   * @param {any} payload
   */
  [types.GET_ARTICLE_LIST] (state, payload) {
    const { list } = payload
    state.articleList = list
  }
}
