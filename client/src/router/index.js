import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

// validation for admin
const authorizedAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('/404')
    return
  }
  next()
}

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
    path: '/admin/users',
    name: 'adminUsers',
    component: () => import('../views/AdminUsers'),
    beforeEnter: authorizedAdmin
  },
  {
    path: '/404',
    name: '404-not-found',
    component: () => import('../views/NotFound')
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

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')
  let isAuthenticated = false
  if (token) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
    console.log("isAuthenticated", isAuthenticated)
  }

  next()
})

export default router
