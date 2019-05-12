import Vue from 'vue'
import App from '@/App.vue'

/** 路由映射 **/
import router from '@/router/index'

/** 状态管理 **/
import store from '@/store/index'

/** 封装的请求函数 **/
import fetch from "@/api/index"

/* loadsh 一个函数工具库 */
import _ from "lodash"

import "@/static/css/index.scss"

Vue.config.productionTip = false

Vue.prototype.$fetch = fetch

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
