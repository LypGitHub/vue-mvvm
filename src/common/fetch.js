import axios from 'axios'
import { path } from './constant'

/**
 * 简单封装请求方法
 *
 * @export
 * @param {any} opt
 * @returns {Promise}
 */
export default function fetchUtil (opt) {
  const { method = 'get', params, url } = opt
  const param = method === 'get' ? {
    params
  } : params
  return new Promise((resolve, reject) =>
    axios[method](path + url, param)
    .then(({ data }) => resolve(data))
    .catch(error => reject(error)))
}
