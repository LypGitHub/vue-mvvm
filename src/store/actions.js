import service from '../service'
import * as types from './mutaion-types'

const { articleService } = service

/**
 * 获取文章列表
 * @tip 不保存在仓库，处理数据
 * @return {Object}
 * @example
 *  如何使用:
 *    this.$store.dispatch('getArticleList')
 *      .then(data => {
 *          this.articleData = data
 *      })
 *  这样view层只要关心viewModel层 不需要关心别的，约定好返回数据，就可以工作了
 *  {
 *    count: 63,
 *    list: [
 *      {
 *        accessCount: 164,
 *        artId: "59b7a01ef111ef5558bf88bf",
 *        author: "author",
 *        ctime: 1505206300000,
 *        imageUrl: "http://images.integrity.com.cn/FlwCHgnGWZoUi9VVqAo9kn9gxfzt"
 *      }
 *    ]
 *  }
 */
export const getArticleList = ({ commit }, payload) => {
  const data = articleService.getArticle(payload)
  return data
}

/**
 * 提交数据保存在仓库
 */
export const getArticleWidthStore = async ({ commit }, payload) => {
  const data = await articleService.getArticle(payload)
  commit(types.GET_ARTICLE_LIST, data)
}
