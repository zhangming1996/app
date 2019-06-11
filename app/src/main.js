import Vue from 'vue'
import App from '@/App.vue'

/** 路由映射 **/
import router from '@/router/index'

/** 状态管理 **/
import store from '@/store/index'

/** Element-ui 的Vue组件 **/
import ElementUI from 'element-ui';

/** Element-ui 的样式文件 **/
import 'element-ui/lib/theme-chalk/index.css';

/** 使用Element-ui **/
Vue.use(ElementUI)

/* loadsh 一个函数工具库 */
import _ from "lodash"

import "@/static/css/index.scss"

/** 封装的请求函数 **/
import fetch from "@/api/index"

/** 状态管理简便方法 **/
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

let vx = Object.create(null)

vx = Object.assign({},{ 
  mapState, mapActions, mapMutations, mapGetters
})

Vue.prototype.$fetch       = fetch

Vue.config.productionTip   = false

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// vuex工具
window["vx"] = vx
// vue实例
window["vm"] = vm