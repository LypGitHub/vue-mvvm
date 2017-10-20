import Promise from 'bluebird'
import { authUtil } from './loginController'
const createMethodMap = (arr) => {
  return arr.map((method) => authUtil(method))
}
/**
 * 权限校验
 *
 * @export
 * @param {any} router 路由对象
 */
export default function (router) {
  router.beforeEach((to, from, next) => {
    // 验证该记录里面的对象是否为空
    JSON.stringify(to.meta) === '{}' && next()
    // 获取验证权限列表
    const authList = Object.keys(to.meta)
    Promise.map(createMethodMap(authList), fn => fn())
      .then(next)
      .catch((err) => {
        console.error(err)
        next(false)
      })
  })
}
