import Vue from 'vue'
import Router from 'vue-router'
import routes from "@/router/router.routes"
import routerGuard from "@/router/router.guard"
import config from "@/router/router.config"

Vue.use(Router)

/** 合并配置 **/
const defaultConfig = Object.assign({
  routes,
}, config)

const router = new Router(defaultConfig)

/** 导肮守卫 **/
routerGuard(router)

export default router