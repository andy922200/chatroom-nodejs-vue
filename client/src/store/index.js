import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: ''
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data, statusText } = await usersAPI.getCurrentUser()
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        // change the state by commit and the response
        commit('setCurrentUser', {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          isAdmin: data.user.isAdmin
        })
        return true
      } catch (err) {
        console.log('error', err)
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {
  }
})
