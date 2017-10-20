import common from '@common'
import controller from '../controller'

const { fetchUtil } = common
const { articleCtrl } = controller

/**
 * 获取文章列表
 *
 * @param {Number} perPage 每页数量
 * @param {Number} page 页码
 */
export const getArticle = ({ perPage, page }) => {
  articleCtrl.getArticleCtrl({ perPage, page })

  return fetchUtil({
    url: 'v1/articles/list',
    params: {
      perPage,
      page
    }
  })
}
