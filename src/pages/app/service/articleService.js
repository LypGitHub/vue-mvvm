import common from '@common'

const { validator, fetchUtil } = common

/**
 * 获取文章列表
 *
 * @param {Number} perPage 每页数量
 * @param {Number} page 页码
 */
export const getArticle = ({ perPage, page }) => {
  validator
    .checkNumber(perPage)
    .checkNumber(page)

  return fetchUtil({
    url: 'articles/list',
    params: {
      perPage,
      page
    }
  })
}
