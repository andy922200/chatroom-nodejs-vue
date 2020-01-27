import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'signIn',
    component: () => import('../views/SignIn')
  },
  {
    path: '/signup',
    name: 'signUp',
    component: () => import('../views/SignUp')
  },
  {
    path: '/chatroom',
    name: 'chatRoom',
    component: () => import('../views/Chatroom')
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
