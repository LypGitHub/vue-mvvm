/**
 * 返回错误句柄
 *
 * @export
 * @param {any} message 错误提示
 * @param {any} code 错误代码
 * @returns {Object}
 */
export default function (message, code) {
  let error = Object.create(null)
  error.message = message
  error.code = code
  return error
}
