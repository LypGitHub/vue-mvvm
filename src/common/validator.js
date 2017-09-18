/*
 * @Description: 校验工具类
 * @Author: Lyp
 * @Date: 2017-09-18 19:46:31
 * @Last Modified by: Lyp
 * @Last Modified time: 2017-09-18 19:50:49
 */

export default class Validator {
  /**
   * 校验是否为数字
   *
   * @static
   * @param {any} value
   * @returns this
   * @memberof Validator
   */
  static checkNumber (value) {
    if (isNaN(value) && typeof value !== 'number') {
      throw TypeError(`${value} 传入的参数必须是数字`)
    }
    return this
  }
}
