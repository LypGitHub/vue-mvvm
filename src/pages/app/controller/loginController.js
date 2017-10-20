import Promise from 'bluebird'
import errorCreate from '@common/errorCreate'

/**
 * 仅仅是校验token的方法
 *
 * @class Authority
 */
class Authority {
  static token = window.sessionStorage.getItem('token') || null
  /**
   * 校验登陆方法
   *
   * @static
   * @returns {Promise}
   * @memberof Authority
   */
  static needLogin () {
    return new Promise((resolve, reject) => {
      console.log('enter')
      // 处理登陆逻辑，这里不需要处理登陆完后的动作，所有的动作交给.then()去执行
      // 提高复用性
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }

  static needTeacher () {
    return new Promise((resolve, reject) => {
      console.log('enter check Teacher')
      setTimeout(() => {
        reject(errorCreate('hasNoAuth', 401))
      }, 1000)
    })
  }
}

export const authUtil = (method) => {
  return typeof Authority[method] === 'function'
  ? Authority[method]
  : Promise.reject('未找到验证权限方法')
}

export default {
  authUtil,
  Authority
}

