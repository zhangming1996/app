import Qs from "qs"
import Axios from "axios"
import { SERVER } from "@/config/index"

/** axios配置 **/

// 默认请求地址
Axios.defaults.baseURL = SERVER
// 超时时间
Axios.defaults.timeout = 5000
// 携带的token
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// post请求默认请求头
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求前拦截
// Axios.interceptors.request.use(config => {
//   // loading
//   return config
// })

// 获取响应后拦截
// Axios.interceptors.response.use(function (res) {
//   // Do something with response data
//   return res;
// }, function (error) {
//   // Do something with res error
//   return Promise.reject(error);
// });

// Axios的请求方法二次封装
const fetch = (opts, data) => {
  let httpDefaultOpts = { //http默认配置
    method: opts.method,
    url: opts.url,
    timeout: 10000,
    params: data,
    data: qs.stringify(data),
    headers: opts.method == 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    } : {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
  }

  if (opts.method == 'get') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }

  let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then(
      (res) => {
        resolve(res)
      }
    ).catch(
      (res) => {
        reject(res)
      }
    )

  })
  return promise
}

export default fetch;