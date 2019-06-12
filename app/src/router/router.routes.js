const routes = [
  {
    path: '/',
    redirect: to => "/home"
  },
  {
    name: 'home',
    path: '/home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/Home.vue')
  }, {
    name: 'login',
    path:"/",
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login/Login.vue')
  }
]

export default routes