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
    path: '/admin/users/create',
    name: 'adminCreateUser',
    component: () => import('../views/AdminCreateUser'),
    beforeEnter: authorizedAdmin
  },
  {
    path: '/admin/users/:id',
    name: 'adminEditUser',
    component: () => import('../views/AdminEditUser'),
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
  const tokenInStore = store.state.token
  const tokenInLocalStorage = localStorage.getItem('token')
  let isAuthenticated = store.state.isAuthenticated
  // compare the difference between the local and the store
  // if true, fetchCurrentUser
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }
  // exclude signUp page
  const pathsWithoutAuthentication = ['signUp']
  if (pathsWithoutAuthentication.includes(to.name)) {
    next()
    return
  }
  // if user is not authenticated, redirect to signin
  // signin page should be excluded!
  if (!isAuthenticated && to.name !== 'signIn') {
    next('/signin')
    return
  }
  next()
})

export default router
