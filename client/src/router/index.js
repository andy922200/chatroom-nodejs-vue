import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signIn'
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import('../views/SignIn')
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound')
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
