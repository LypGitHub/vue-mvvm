import common from '@common'

const { validator } = common

/**
 * 获取文章列表校验控制器
 * @param {*} param0
 */
export const getArticleCtrl = ({page, perPage}) => {
  validator
    .checkNumber(perPage)
    .checkNumber(page)
}
